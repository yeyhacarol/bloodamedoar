import styles from "./Requirements.module.css";

import req1 from "../../assets/bloobs/req-1.svg";
import req2 from "../../assets/bloobs/req-2.svg";
import req3 from "../../assets/bloobs/req-3.svg";
import req4 from "../../assets/bloobs/req-4.svg";

import imp1 from "../../assets/bloobs/imp-1.svg";
import imp2 from "../../assets/bloobs/imp-2.svg";
import imp3 from "../../assets/bloobs/imp-3.svg";
import imp4 from "../../assets/bloobs/imp-4.svg";
import imp5 from "../../assets/bloobs/imp-5.svg";
import imp6 from "../../assets/bloobs/imp-6.svg";

const Requirements = () => {
  return (
    <section className={styles.requirements}>
      <h2>Quer saber como doar?</h2>
      <div className={styles.see_requirements}>
        <h3>
          Veja os <span>requisitos</span>
        </h3>
        <div className={styles.requirements_bloobs}>
          <div className={`${styles.first_req} ${styles.req}`}>
            <img
              src={req1}
              alt="Esteja alimentado. Evite alimentos gordurosos nas 3 horas que antecedem a doação de sangue, evite bebidas alcoólicas também."
            />
            <p>
              Esteja alimentado. Evite alimentos gordurosos nas 3 horas que
              antecedem a doação de sangue, evite bebidas alcoólicas também.
            </p>
          </div>
          <div className={`${styles.second_req} ${styles.req}`}>
            <img
              src={req2}
              alt="Durma pelo menos 6 horas nas últimas 24 horas."
            />
            <p>Durma pelo menos 6 horas nas últimas 24 horas.</p>
          </div>
          <div className={`${styles.third_req} ${styles.req}`}>
            <img
              src={req3}
              alt="A idade mínima para doar é 16 anos. Pessoas com idade entre 60 e 69 anos só poderão doar sangue se já o tiverem feito antes dos 60 anos."
            />
            <p>
              A idade mínima para doar é 16 anos. Pessoas com idade entre 60 e
              69 anos só poderão doar sangue se já o tiverem feito antes dos 60
              anos.
            </p>
          </div>
          <div className={`${styles.fourth_req} ${styles.req}`}>
            <img
              src={req4}
              alt="Homens podem doar até 4 vezes no ano em um período de 2 meses, já as mulheres podem doar até 3 vezes no ano a cada 3 meses."
            />
            <p>
              Homens podem doar até 4 vezes no ano em um período de 2 meses, já
              as mulheres podem doar até 3 vezes no ano a cada 3 meses.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.see_impediments}>
        <h3>
          Veja os <span>impeditivos</span>
        </h3>
        <div className={styles.impediments_bloobs}>
          <div className={`${styles.first_imp} ${styles.imp}`}>
            <img src={imp1} alt="Resfriados e sintomas de gripe." />
            <p>Resfriados e sintomas de gripe.</p>
          </div>
          <div className={`${styles.second_imp} ${styles.imp}`}>
            <img
              src={imp2}
              alt="Gravidez, 90 dias após parto normal e 180 dias após cesariana, amamentação (se o parto ocorreu há menos de 12 meses)."
            />
            <p>
              Gravidez, 90 dias após parto normal e 180 dias após cesariana,
              amamentação (se o parto ocorreu há menos de 12 meses).
            </p>
          </div>
          <div className={`${styles.third_imp} ${styles.imp}`}>
            <img src={imp3} alt="Procedimentos endoscópicos." />
            <p>Procedimentos endoscópicos.</p>
          </div>
          <div className={`${styles.fourth_imp} ${styles.imp}`}>
            <img
              src={imp4}
              alt="Procedimentos dentários: extração dentária (verificar uso de medicação) ou tratamento de canal (verificar medicação). Cirurgia odontológica com anestesia geral."
            />
            <p>
              Procedimentos dentários: extração dentária (verificar uso de
              medicação) ou tratamento de canal (verificar medicação). Cirurgia
              odontológica com anestesia geral.
            </p>
          </div>
          <div className={`${styles.fifth_imp} ${styles.imp}`}>
            <img src={imp5} alt="Vacinações de vários tipos." />
            <p>Vacinações de vários tipos.</p>
          </div>
          <div className={`${styles.sixth_imp} ${styles.imp}`}>
            <img
              src={imp6}
              alt="Tatuagem, maquiagem definitiva e micropigmentação de 6 a 12 meses."
            />
            <p>
              Tatuagem, maquiagem definitiva e micropigmentação de 6 a 12 meses.
            </p>
          </div>
        </div>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.gov.br/saude/pt-br/composicao/saes/sangue#:~:text=Quais%20s%C3%A3o%20os%20requisitos%20para,com%20consentimento%20formal%20dos%20respons%C3%A1veis."
      >
        Ver todos hemocentros
      </a>
    </section>
  );
};

export default Requirements;
