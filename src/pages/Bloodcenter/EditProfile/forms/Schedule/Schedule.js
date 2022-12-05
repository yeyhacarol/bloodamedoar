import Container from "../../../../../components/layout/Container/Container";
import ProfileHeader from "../../../../../components/ProfileHeader/ProfileHeader";
import Selection from "../../../../../components/form/Select/Selection";
import Input from "../../../../../components/form/Input/Input";
import Submit from "../../../../../components/form/Submit/Submit";
import styles from "./Schedule.module.css";
import { onlyNumbers } from "../../../../../utils/regex";
import { useState, useEffect, useMemo } from "react";
import { get } from "../../../../../services/apiBlood/http/get";
import { useContext } from "react";
import { AuthContext } from "../../../../../contexts/Auth/AuthContext";
import { post } from "../../../../../services/apiBlood/http/post";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { Link } from "react-router-dom";
import { getTimeSlots } from "./utils/getTimeSlots";

export const clone = (data) => {
  return JSON.parse(JSON.stringify(data));
};

const useCreateValues = (initial, selectedDay) => {
  const [vacancies, setVacancy] = useState(initial);

  const handleChangeVacancies = (e, vacancy) => {
    setVacancy((oldVacancies) => {
      let clonedVacancies = clone(oldVacancies);

      const selectedDayHours = clonedVacancies.find((obj) => obj[selectedDay]);
      const dayIndex = clonedVacancies.findIndex(
        (obj) => obj == selectedDayHours
      );
      const hourIndex = selectedDayHours[selectedDay].findIndex(
        (obj) => obj.hora_coleta == vacancy.hora_coleta
      );

      clonedVacancies[dayIndex][selectedDay][
        hourIndex
      ].quantidade_vagas_coleta = e;

      return clonedVacancies;
    });
  };
  return [vacancies, handleChangeVacancies, setVacancy];
};

const Schedule = ({ cape, photo, bloodcenter, setVisible }) => {
  const auth = useContext(AuthContext);
  const now = new Date();

  const [defaultData, setDefaultData] = useState({
    hora_inicio: "",
    hora_termino: "",
    quantidade_vagas_media: "",
    id_tipo_servico: "",
    tempo_coleta: 0,
    id_unidade_hemocentro: auth.user,
  });

  const [selectableHours, setSelectableHours] = useState([]);
  const [collect, setCollect] = useState({});
  const [selectedDay, setSelectedDay] = useState(now.toISOString());
  const [vacancies, handleChangeVacancies, setVacancy] = useCreateValues(
    [],
    selectedDay
  );

  const [errors, setErrors] = useState({
    hora_inicio: {
      error: false,
      errorMessage: "",
    },
    hora_termino: {
      error: false,
      errorMessage: "",
    },
    quantidade_vagas_media: {
      error: false,
      errorMessage: "",
    },
    tipo_servico: {
      error: false,
      errorMessage: "",
    },
  });

  const handleOnChange = (input, value) => {
    setDefaultData((prevState) => ({ ...prevState, [value]: input }));
  };

  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (e) => {
    setSelectedValue(e.value);
  };

  const [id_tipo_servico, setId_tipo_servico] = useState([]);

  useEffect(() => {
    let id_tipo_servico = [];

    get("/listarTipoServico").then((resp) => {
      resp.map((service) => {
        return id_tipo_servico.push({
          value: `${service.id}`,
          label: service.tipo_servico,
        });
      });

      setId_tipo_servico(id_tipo_servico);
    });
  }, []);

  function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return "0" + hours + ":" + minutes;
  }

  useEffect(() => {
    if (selectedValue == 1) {
      const newTime = time_convert(90);
      setDefaultData({ ...defaultData, tempo_coleta: newTime });
    } else {
      const newTime = time_convert(45);
      setDefaultData({ ...defaultData, tempo_coleta: newTime });
    }
  }, [selectedValue]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!selectedValue) {
      return setErrors({
        ...errors,
        tipo_servico: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    if (!defaultData.quantidade_vagas_media) {
      return setErrors({
        ...errors,
        quantidade_vagas_media: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    if (!defaultData.hora_inicio) {
      return setErrors({
        ...errors,
        hora_inicio: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    if (!defaultData.hora_termino) {
      return setErrors({
        ...errors,
        hora_termino: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    if (defaultData.hora_termino <= defaultData.hora_inicio) {
      return setErrors({
        ...errors,
        hora_inicio: {
          error: true,
          errorMessage: "O expediente não pode terminar antes de iniciar.",
        },
      });
    }

    setDefaultData({
      ...defaultData,
      id_tipo_servico: selectedValue,
    });

    console.log(defaultData);

    post("/cadastrarConfigAgenda", {
      ...defaultData,
      id_tipo_servico: selectedValue,
    });

    setSelectableHours(() => {
      return getTimeSlots(
        defaultData.hora_inicio,
        defaultData.hora_termino,
        defaultData.tempo_coleta
      );
    });
  };

  const [dates, setDates] = useState([]);

  const getAllDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);

    const dates = [];

    while (date.getMonth() === month) {
      dates.push(new Date(date).toISOString());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  useEffect(() => {
    setDates(getAllDaysInMonth(now.getFullYear(), now.getMonth()));

    const formatedSelectableHours = selectableHours.map((selectableHour) => {
      return {
        hora_coleta: selectableHour,
        quantidade_vagas_coleta: defaultData.quantidade_vagas_media,
      };
    });

    const collectionVacancy = dates.map((date) => {
      return { [date]: formatedSelectableHours };
    });

    const collection = dates.map((date) => {
      return {
        data_coleta: date.split("T")[0],
        formatedSelectableHours,
      };
    });

    setVacancy(collectionVacancy);

    setCollect({ collection, id_unidade_hemocentro: auth.user });
  }, [selectableHours]);

  const personalized = () => {
    const collectionData = [];

    vacancies.forEach((vacancy) => {
      Object.keys(vacancy).forEach((key) => {
        const vacancyData = {
          data_coleta: key.split("T")[0],
          collectionVacancy: [],
        };
        vacancy[key].forEach((item) =>
          vacancyData.collectionVacancy.push({
            hora_coleta: item.hora_coleta,
            quantidade_vagas_coleta: item.quantidade_vagas_coleta,
          })
        );
        collectionData.push(vacancyData);
      });
    });

    const formatedData = {
      collection: collectionData,
      id_unidade_hemocentro: auth.user,
    };

    post("/CadastrarAgendaHemocentro", formatedData);
  };

  // O QUE É PRECISO FAZER?

  // 3 - BUSCAR AGENDA POR TIPO SERVIÇO

  const hours = useMemo(() => {
    {
      return vacancies.map((vacancy) => {
        return vacancy[selectedDay]?.map((selectedDayVacancy) => {
          return (
            <div className={styles.timeslot}>
              <div className={styles.personalized_hour}>
                {selectedDayVacancy.hora_coleta}
              </div>
              <Input
                placeholder="Qtde. de vagas"
                mask={onlyNumbers}
                name="quantidade_vagas_coleta"
                value={selectedDayVacancy.quantidade_vagas_coleta}
                handleOnChange={(event) =>
                  handleChangeVacancies(event, selectedDayVacancy)
                }
                custom={styles.personalized_quantity}
              />
            </div>
          );
        });
      });
    }
  }, [selectedDay]);

  return (
    <>
      <ProfileHeader
        customHeader={styles.header}
        cape={cape}
        photo={photo}
        bloodcenter={bloodcenter}
      />

      <div className={styles.schedule_tab}>
        <Container title="Agenda padrão" customClass={styles.container}>
          <form className={styles.default_schedule} onSubmit={handleOnSubmit}>
            <div className={styles.top}>
              <Selection
                custom={styles.select}
                closeMenuOnSelect={true}
                placeholder="Tipo de serviço"
                error={errors.tipo_servico.error}
                errorMessage={errors.tipo_servico.errorMessage}
                name="id_tipo_servico"
                message="Sem serviços"
                label="Tipo de serviço"
                options={id_tipo_servico && id_tipo_servico}
                handleOnChange={handleChange}
                onFocus={() => setErrors({ ...errors, tipo_servico: false })}
              />

              <Input
                info="Qtde. de vagas"
                placeholder="Qtde. de vagas"
                mask={onlyNumbers}
                error={errors.quantidade_vagas_media.error}
                errorMessage={errors.quantidade_vagas_media.errorMessage}
                name="quantidade_vagas_media"
                value={defaultData.quantidade_vagas_media || ""}
                handleOnChange={handleOnChange}
                custom={styles.quantity}
                onFocus={() =>
                  setErrors({ ...errors, quantidade_vagas_media: false })
                }
              />
            </div>

            <div className={styles.bottom}>
              <h3>Horário de atendimento</h3>
              <div className={styles.time}>
                <div className={styles.time_input}>
                  <Input
                    type="time"
                    error={errors.hora_inicio.error}
                    errorMessage={errors.hora_inicio.errorMessage}
                    name="hora_inicio"
                    value={defaultData.hora_inicio || ""}
                    handleOnChange={handleOnChange}
                    custom={styles.hour}
                    info="Horário início"
                    onFocus={() => setErrors({ ...errors, hora_inicio: false })}
                  />
                  <Input
                    type="time"
                    error={errors.hora_termino.error}
                    errorMessage={errors.hora_termino.errorMessage}
                    name="hora_termino"
                    value={defaultData.hora_termino || ""}
                    handleOnChange={handleOnChange}
                    custom={styles.hour}
                    info="Horário término"
                    onFocus={() =>
                      setErrors({ ...errors, hora_termino: false })
                    }
                  />
                </div>
                <div className={styles.submit_container}>
                  <Submit
                    action="Gerar calendário"
                    customClass={styles.default_submit}
                  />
                </div>
              </div>
            </div>
          </form>
        </Container>

        <Container title="Agenda personalizada" customClass={styles.container}>
          <form className={styles.personalized}>
            <div className={styles.calendar}>
              <div className={styles.date}>{`${now.toLocaleString("default", {
                month: "long",
              })} de ${now.getFullYear()}`}</div>
              <Calendar
                minDate={new Date(now.getFullYear(), now.getMonth(), 1)}
                maxDate={new Date(now.getFullYear(), now.getMonth() + 1, 0)}
                showNavigation={false}
                onChange={(e) => {
                  setSelectedDay(new Date(e).toISOString());
                }}
              />
            </div>
            <div className={styles.timeslots}>{hours}</div>
          </form>
        </Container>

        <div className={styles.action}>
          <Submit
            action="Salvar"
            customClass={styles.save}
            handleOnClick={personalized}
          />
          <Link
            onClick={(e) => {
              e.preventDefault();
              setVisible(true);
            }}
          >
            Desativar conta
          </Link>
        </div>
      </div>
    </>
  );
};

export default Schedule;
