import { useState } from "react";
import styles from "./Registration.module.css";

import IconLogo from "../../../components/logo/IconLogo/IconLogo";
import Heading from "../../../components/Heading/Heading";
import Steps from "../../../components/Steps/Steps";
import Bloodflow from "../../../components/Bloodflow/Bloodflow";
import BloodcenterData from "../../../components/forms/Bloodcenter/Registration/BloodcenterData/BloodcenterData";
import BloodcenterAddress from "../../../components/forms/Bloodcenter/Registration/BloodcenterAddress/BloodcenterAddress";
import BloodcenterAccount from "../../../components/forms/Bloodcenter/Registration/BloodcenterAccount/BloodcenterAccount";

const BloodcenterRegistration = () => {
  const [visibility, setVisibility] = useState({
    bloodcenterData: true,
    bloodcenterAddress: false,
    bloodcenterAccount: false,
  });

  const handleVisibility = (e) => {
    e.preventDefault();

    if (visibility.bloodcenterData)
      return setVisibility({
        ...visibility,
        bloodcenterAddress: true,
        bloodcenterData: false,
      });

    if (visibility.bloodcenterAddress)
      return setVisibility({
        ...visibility,
        bloodcenterAddress: false,
        bloodcenterAccount: true,
      });
  };

  return (
    <div className={styles.registration_container}>
      <div className={styles.logo}>
        <IconLogo />
      </div>
      <div className={styles.registration_content}>
        <Heading heading="Cadastrar-se" />
        <Steps />
        <>
          {visibility.bloodcenterAccount && (
            <BloodcenterAccount onClick={handleVisibility} />
          )}
          {visibility.bloodcenterAddress && (
            <BloodcenterAddress onClick={handleVisibility} />
          )}
          {visibility.bloodcenterData && (
            <BloodcenterData onClick={handleVisibility} />
          )}
        </>
      </div>

      <Bloodflow />
    </div>
  );
};

export default BloodcenterRegistration;
