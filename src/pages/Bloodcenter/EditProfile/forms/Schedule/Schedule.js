import Container from "../../../../../components/layout/Container/Container";
import ProfileHeader from "../../../../../components/ProfileHeader/ProfileHeader";
import Selection from "../../../../../components/form/Select/Selection";
import Input from "../../../../../components/form/Input/Input";
import Submit from "../../../../../components/form/Submit/Submit";
import styles from "./Schedule.module.css";
import { onlyNumbers } from "../../../../../utils/regex";
import { useState, useEffect } from "react";
import { get } from "../../../../../services/apiBlood/http/get";
import { useContext } from "react";
import { AuthContext } from "../../../../../contexts/Auth/AuthContext";
import { post } from "../../../../../services/apiBlood/http/post";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { Link } from "react-router-dom";
import { getTimeSlots } from "./utils/getTimeSlots";

const Schedule = ({ cape, photo, bloodcenter, setVisible }) => {
  const auth = useContext(AuthContext);

  const [defaultData, setDefaultData] = useState({
    hora_inicio: "",
    hora_termino: "",
    quantidade_vagas_media: "",
    id_tipo_servico: "",
    id_unidade_hemocentro: auth.user,
  });

  const [selectableHours, setSelectableHours] = useState([]);

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

  const [date, setDate] = useState(new Date());

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

    setDefaultData({ ...defaultData, id_tipo_servico: selectedValue });

    // post("/cadastrarConfigAgenda", {
    //   ...defaultData,
    //   id_tipo_servico: selectedValue,
    // });

    setSelectableHours(() => {
      return getTimeSlots(defaultData.hora_inicio, defaultData.hora_termino);
    });

    console.log(selectableHours);
  };

  function getAllDaysInMonth(year, month) {
    const date = new Date(year, month, 1);

    const dates = [];

    while (date.getMonth() === month) {
      console.log("date", dates.push(new Date(date)));
      date.setDate(date.getDate() + 1);
    }

    console.log(dates);

    return dates;
  }

  const dt = new Date();

  console.log(getAllDaysInMonth(dt.getFullYear(), dt.getMonth(), dt.getDate()));

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
          <div className={styles.personalized}>
            <Calendar
              onClickMonth={(e) => console.log("click month: ", e)}
              onChange={(e) => {
                setDate(e);
                console.log("on change: ", e);
              }}
              value={date}
            />
            <div className={styles.timeslots}>
              {selectableHours.map((hour) => (
                <div className={styles.timeslot}>
                  <div className={styles.personalized_hour}>{hour}</div>
                  <Input
                    placeholder="Qtde. de vagas"
                    mask={onlyNumbers}
                    name="quantidade_vagas"
                    value={defaultData.quantidade_vagas_media}
                    handleOnChange={handleOnChange}
                    custom={styles.personalized_quantity}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>

        <div className={styles.action}>
          <Submit action="Salvar" customClass={styles.save} />
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
