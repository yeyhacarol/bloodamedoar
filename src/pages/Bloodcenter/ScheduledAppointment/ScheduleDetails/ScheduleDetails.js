import { useNavigate, useParams } from "react-router-dom";
import styles from "./ScheduleDetails.module.css";

import close from "../../../../assets/bloobs/close.png";
import ModalLogo from "../../../../components/logo/ModalLogo/ModalLogo";
import Heading from "../../../../components/Heading/Heading";
import Submit from "../../../../components/form/Submit/Submit";

import patient from "../../../../assets/bloobs/profile.svg";
import { useEffect, useState } from "react";
import { getById } from "../../../../services/apiBlood/http/get";
import { put } from "../../../../services/apiBlood/http/put";
import { cpfMask, dateMask, phoneMask } from "../../../../utils/masks";

const ScheduleDetails = () => {
  const navigation = useNavigate();

  const { id } = useParams();

  const [query, setQuery] = useState({});

  useEffect(() => {
    getById("/ListarConsultasPorId", id).then((response) => {
      const resp = response[0];

      resp.map((item) => {
        setQuery(item);
      });
    });
  }, []);

  const completeQuery = () => {
    put("/FinalizarConsulta", id);
  };

  return (
    <div className={styles.schedule_details}>
      <div className={styles.close_container}>
        <div
          className={styles.close}
          onClick={() => {
            navigation(-1);
          }}
        >
          <img src={close} alt="Fechar modal" title="Fechar modal?" />
          <span>X</span>
        </div>
      </div>

      <div className={styles.schedule_details_content}>
        <div className={styles.logo}>
          <ModalLogo />
        </div>
        <Heading heading="Agendamento" />

        <div className={styles.patient_data_container}>
          <img
            src={query.foto_perfil ? query.foto_perfil : patient}
            alt={query.nome_completo}
          />
          <div className={styles.patient_data}>
            <h3>{query.nome_completo}</h3>
            <table>
              <tbody className={styles.tbody}>
                <tr className={styles.data}>
                  <th>Dados cadastrais</th>
                  <td>Data de nascimento</td>
                  <td>CPF</td>
                  <td>Telefone</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {query.data_nascimento
                      ? dateMask(query.data_nascimento)
                      : "00/00/0000"}
                  </td>
                  <td>{query.cpf ? cpfMask(query.cpf) : "000.000.000-00"}</td>
                  <td>
                    {query.telefone_doador
                      ? phoneMask(query.telefone_doador)
                      : "(00) 00000-0000"}
                  </td>
                </tr>
              </tbody>
              <tbody className={styles.tbody}>
                <tr className={styles.data}>
                  <th>Doação</th>
                  <td>Tipo de doação</td>
                  <td>Tipo sanguíneo</td>
                  <td>Data e hora</td>
                </tr>
                <tr>
                  <td></td>
                  <td>{query.tipo_servico}</td>
                  <td>{query.tipo_sanguineo}</td>
                  <td>
                    {dateMask(query.data_agendada_doador)} | {query.hora}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {!query.concluido && (
          <Submit
            action="Concluir agendamento"
            customClass={styles.button}
            handleOnClick={completeQuery}
          />
        )}
      </div>
    </div>
  );
};

export default ScheduleDetails;
