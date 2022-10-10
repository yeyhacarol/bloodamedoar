import styles from "./Registration.module.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import step from "../../../assets/bloobs/step.svg";
import currentstep from "../../../assets/bloobs/current-step.svg";

import IconLogo from "../../../components/logo/IconLogo/IconLogo";
import Heading from "../../../components/Heading/Heading";
import Bloodflow from "../../../components/Bloodflow/Bloodflow";

import BloodcenterData from "../../../components/forms/Bloodcenter/Registration/BloodcenterData/BloodcenterData";
import BloodcenterAddress from "../../../components/forms/Bloodcenter/Registration/BloodcenterAddress/BloodcenterAddress";
import BloodcenterAccount from "../../../components/forms/Bloodcenter/Registration/BloodcenterAccount/BloodcenterAccount";
import { useState } from "react";

const Registration = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabSteps, setTabSteps] = useState([0]);

  return (
    <div className={styles.registration_container}>
      <div className={styles.logo}>
        <IconLogo />
      </div>
      <div className={styles.registration_content}>
        <Heading heading="Cadastrar-se" />

        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => {
            if (tabSteps.includes(index)) {
              setTabIndex(index);
            }
          }}
        >
          <TabList className={styles.steps}>
            <Tab className={styles.step}>
              <img
                src={tabIndex === 0 ? currentstep : step}
                alt="Primeira etapa"
                className={styles.bloob}
              />
              <span>1</span>
            </Tab>
            <div className={styles.line}></div>
            <Tab className={styles.step}>
              <img
                src={tabIndex === 1 ? currentstep : step}
                alt="Segundo etapa"
                className={styles.bloob}
              />
              <span>2</span>
            </Tab>
            <div className={styles.line}></div>
            <Tab className={styles.step}>
              <img
                src={tabIndex === 2 ? currentstep : step}
                alt="Terceira etapa"
                className={styles.bloob}
              />
              <span>3</span>
            </Tab>
          </TabList>

          <TabPanel>
            <BloodcenterData
              setTabIndex={setTabIndex}
              setTabSteps={setTabSteps}
            />
          </TabPanel>
          <TabPanel>
            <BloodcenterAddress
              setTabIndex={setTabIndex}
              setTabSteps={setTabSteps}
            />
          </TabPanel>
          <TabPanel>
            <BloodcenterAccount setTabIndex={setTabIndex} />
          </TabPanel>
        </Tabs>
      </div>

      <Bloodflow />
    </div>
  );
};

export default Registration;
