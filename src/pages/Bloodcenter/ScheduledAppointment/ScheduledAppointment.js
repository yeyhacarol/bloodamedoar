import styles from "./ScheduledAppointment.module.css";

import Menu from "../../../components/layout/Menu/Menu";
import Header from "../../../components/Header/Header";
import Filter from "../../../components/Filter/Filter";
import ListItem from "../../../components/list/ListItem/ListItem";

import { getById } from "../../../services/apiBlood/http/get";

import patient from "../../../assets/bloobs/profile.svg";
import { useContext, useState, useEffect, useMemo } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { dateMask } from "../../../utils/masks";

const ScheduledAppointment = () => {
  const auth = useContext(AuthContext);

  const [queries, setQueries] = useState([]);
  const [date, setDate] = useState({
    date: "",
  });

  useEffect(() => {
    getById("/ListarConsultasPorHemocentro", auth.user).then((response) => {
      const resp = response[0];

      setQueries(resp);
    });
  }, [auth.user]);

  const handleOnChange = (input, value) => {
    setDate((prevState) => ({ ...prevState, [value]: input }));
  };

  const filteredBloodcenter = useMemo(() => {
    return date
      ? queries.filter((item) => item.data_agendada_doador.includes(date.date))
      : queries;
  }, [queries, date]);

  return (
    <>
      <Menu />

      <div className={styles.scheduler_list_content}>
        <Header action="Entrar" />

        <div className={styles.listing}>
          <Filter
            placeholder="Agendamentos por dia"
            type="date"
            name="date"
            value={date.date || ""}
            handleOnChange={handleOnChange}
          />
          <h3>Consultas em andamento</h3>
          {filteredBloodcenter.length > 0 ? (
            filteredBloodcenter.map((item) => {
              return (
                item.concluido === 0 && (
                  <ListItem
                    key={item.id}
                    logo={item.foto_perfil ? item.foto_perfil : patient}
                    name={item.nome_completo}
                    info={`${dateMask(item.data_agendada_doador)} | ${
                      item.hora
                    } | ${item.tipo_servico} | ${item.tipo_sanguineo}`}
                    link={`/scheduledappointment/${item.id_agendamento_doador}`}
                  />
                )
              );
            })
          ) : (
            <p className={styles.no_scheduler}>
              Você não possui agendamentos para este dia.
            </p>
          )}

          <div className={styles.concluded}>
            <h3>Consultas concluídas</h3>
            {queries.map((item) => {
              return (
                item.concluido === 1 && (
                  <ListItem
                    key={item.id}
                    logo={item.foto_perfil ? item.foto_perfil : patient}
                    name={item.nome_completo}
                    info={`${dateMask(item.data_agendada_doador)} | ${
                      item.hora
                    } | ${item.tipo_servico} | ${item.tipo_sanguineo}`}
                    link={`/scheduledappointment/${item.id_agendamento_doador}`}
                  />
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduledAppointment;
