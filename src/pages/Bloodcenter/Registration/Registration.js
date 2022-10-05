import styles from "./Registration.module.css";

import IconLogo from "../../../components/logo/IconLogo/IconLogo";
import Heading from "../../../components/Heading/Heading";
import Steps from "../../../components/Steps/Steps";
import Bloodflow from "../../../components/Bloodflow/Bloodflow";
import BloodcenterData from "../../../components/forms/Bloodcenter/Registration/BloodcenterData/BloodcenterData";
import BloodcenterAddress from "../../../components/forms/Bloodcenter/Registration/BloodcenterAddress/BloodcenterAddress";
import BloodcenterAccount from "../../../components/forms/Bloodcenter/Registration/BloodcenterAccount/BloodcenterAccount";

const BloodcenterRegistration = () => {
  return (
    <div className={styles.registration_container}>
      <div className={styles.logo}>
        <IconLogo />
      </div>
      <div className={styles.registration_content}>
        <Heading heading="Cadastrar-se" />
        <Steps />
        <form>
          <BloodcenterData />

          <BloodcenterAddress />

          <BloodcenterAccount />
        </form>
      </div>

      <Bloodflow />
    </div>
  );
};

export default BloodcenterRegistration;
