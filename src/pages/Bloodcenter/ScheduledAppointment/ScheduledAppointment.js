import styles from "./ScheduledAppointment.module.css";

import Menu from "../../../components/layout/Menu/Menu";
import Header from "../../../components/Header/Header";
import Filter from "../../../components/Filter/Filter";
import ListItem from "../../../components/list/ListItem/ListItem";

import pacient from "../../../assets/pacient.png";

const ScheduledAppointment = () => {
  return (
    <>
      <Menu label="Hemocentros" alt="Hemocentros" title="Hemocentros" />

      <div className={styles.scheduler_list_content}>
        <Header action="Entrar" />

        <div className={styles.listing}>
          <Filter placeholder="Agendamentos por dia" type="date" />
          <ListItem
            logo={pacient}
            name="Rosângela"
            info={
              " 18/11/2022 " +
              "  |  " +
              " 09:00:00 " +
              "  |  " +
              " Sangue " +
              "  |  " +
              " AB+ "
            }
            link="/scheduledappointment/id"
          />
        </div>
      </div>
    </>
  );
};

export default ScheduledAppointment;
