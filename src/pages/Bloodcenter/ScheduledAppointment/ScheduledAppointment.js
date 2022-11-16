import styles from "./ScheduledAppointment.module.css";

import Menu from "../../../components/layout/Menu/Menu";
import Header from "../../../components/Header/Header";
import Filter from "../../../components/Filter/Filter";

const ScheduledAppointment = () => {
  return (
    <div className={styles.scheduledappointment_container}>
      <Menu />

      <div className={styles.scheduledappointment_content}>
        <Header span="Veja suas consultas" />

        <Filter placeholder="Agendamentos por dia" type="date" />
      </div>
    </div>
  );
};

export default ScheduledAppointment;
