import { useNavigate } from "react-router-dom";
import styles from "./ScheduleDetails.module.css";

import close from "../../../../assets/bloobs/close.png";
import ModalLogo from "../../../../components/logo/ModalLogo/ModalLogo";
import Heading from "../../../../components/Heading/Heading";

import patient from "../../../../assets/pacient.png";

const ScheduleDetails = () => {
  const navigation = useNavigate();

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
          <img src={patient} alt="nomedopaciente" />
          <div className={styles.patient_data}>
            <h3>Rosângela Ramos</h3>
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
                  <td>20/07/1999</td>
                  <td>541.562.411-21</td>
                  <td>(11) 96180-9546</td>
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
                  <td>Sangue</td>
                  <td>AB+</td>
                  <td>18/11/2022 | 09:00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetails;
