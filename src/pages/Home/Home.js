import styles from "./Home.module.css";

import req1 from "../../assets/bloobs/req-1.svg";
import req2 from "../../assets/bloobs/req-2.svg";
import req3 from "../../assets/bloobs/req-3.svg";
import req4 from "../../assets/bloobs/req-4.svg";

import Menu from "../../components/layout/Menu/Menu";
import Header from "../../components/Header/Header";
import CampaignSlider from "../../components/donativeCampaign/CampaignSlider/CampaignSlider";
import List from "../../components/list/List/List";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Menu
        label="Hemocentros"
        alt="Lista de hemocentros"
        title="Lista de hemocentros"
      />

      <div className={styles.home_content}>
        <Header action="Entrar" />

        <div className={styles.content}>
          <CampaignSlider />

          <List />

          <section className={styles.requirements}>
            <h2>Quer saber como doar?</h2>
            <h3>
              Veja os <span>requisitos</span>
            </h3>
            <div className={styles.see_requirements}>
              <div className={styles.requirements_bloobs}>
                <div className={styles.first_req}>
                  <img
                    src={req1}
                    alt="Esteja alimentado. Evite alimentos gordurosos nas 3 horas que antecedem a doação de sangue, evite bebidas alcoólicas também."
                  />
                  <p>
                    Esteja alimentado. Evite alimentos gordurosos nas 3 horas
                    que antecedem a doação de sangue, evite bebidas alcoólicas
                    também.
                  </p>
                </div>
                <div className={styles.second_req}>
                  <img
                    src={req2}
                    alt="Durma pelo menos 6 horas nas últimas 24 horas."
                  />
                  <p>Durma pelo menos 6 horas nas últimas 24 horas.</p>
                </div>
                <div className={styles.third_req}>
                  <img
                    src={req3}
                    alt="A idade mínima para doar é 16 anos. Pessoas com idade entre 60 e 69 anos só poderão doar sangue se já o tiverem feito antes dos 60 anos."
                  />
                  <p>
                    A idade mínima para doar é 16 anos. Pessoas com idade entre
                    60 e 69 anos só poderão doar sangue se já o tiverem feito
                    antes dos 60 anos.
                  </p>
                </div>
                <div className={styles.fourty_req}>
                  <img
                    src={req4}
                    alt="Homens podem doar até 4 vezes no ano em um período de 2 meses, já as mulheres podem doar até 3 vezes no ano a cada 3 meses."
                  />
                  <p>
                    Homens podem doar até 4 vezes no ano em um período de 2
                    meses, já as mulheres podem doar até 3 vezes no ano a cada 3
                    meses.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.see_impediments}>
              <h3>
                Veja os <span>impeditivos</span>
              </h3>

              <div className={styles.impediments_bloobs}></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
