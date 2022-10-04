import styles from "./BloodcenterRegistration.module.css";

import IconLogo from "../../../components/logo/IconLogo/IconLogo";
import Heading from "../../../components/Heading/Heading";
import Steps from "../../../components/Steps/Steps";

const BloodcenterRegistration = () => {
  return (
    <div className={styles.registration_container}>
      <div className={styles.logo}>
        <IconLogo />
      </div>

      <div className={styles.registration_content}>
        <Heading heading="Cadastrar-se" />

        <Steps />
      </div>
    </div>
  );
};

export default BloodcenterRegistration;
