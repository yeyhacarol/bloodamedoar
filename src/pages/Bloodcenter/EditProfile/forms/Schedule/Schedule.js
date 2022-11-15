import Container from "../../../../../components/layout/Container/Container";
import ProfileHeader from "../../../../../components/ProfileHeader/ProfileHeader";
import styles from "./Schedule.module.css";

const Schedule = ({ cape, photo, bloodcenter }) => {
  return (
    <div className={styles.schedule_container}>
      <ProfileHeader
        customHeader={styles.header}
        cape={cape}
        photo={photo}
        bloodcenter={bloodcenter}
      />

      <form className={styles.schedule_tab}>
        <Container
          title="Agenda padrão"
          customClass={styles.container}
        ></Container>

        <Container
          title="Agenda personalizada"
          customClass={styles.container}
        ></Container>
      </form>
    </div>
  );
};

export default Schedule;
