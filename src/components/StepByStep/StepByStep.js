import styles from "./StepByStep.module.css";

import lfdownArrow from "../../assets/arrow/left-arrow-down.svg";
import lfupArrow from "../../assets/arrow/left-arrow-up.svg";
import downArrow from "../../assets/arrow/down-arrow.svg";

const StepByStep = () => {
  return (
    <section className={styles.step_by_step}>
      <h2>
        Veja o passo a passo de como a doação é feita depois do agendamento e o
        pós-doação
      </h2>
      <div className={styles.top}>
        <div className={styles.step}>
          <h4>VOTO DE AUTOEXCLUSÃO</h4>
          <div className={styles.step_content}>
            <p>
              Visando máxima segurança para o paciente que receberá transfusão
              de seu sangue, se ao final da análise da triagem você for
              considerado apto para doação, mas não tiver respondido algumas
              questões confidenciais, haverá a oportunidade íntima de você
              indicar que seu sangue não deverá ser utilizado em transfusão.
            </p>
          </div>
          <img
            className={`${styles.next_step} ${styles.first_step}`}
            src={lfdownArrow}
            alt="Próximo passo"
          />
        </div>
        <div className={styles.step}>
          <h4>VOTO DE AUTOEXCLUSÃO</h4>
          <div className={styles.step_content}>
            <p>
              Independentemente de seu “Voto de Autoexclusão” ser sido SIM ou
              NÃO, em seguida, você será encaminhado à sala de coleta. Será
              colhido cerca de 450 ml de seu sangue em caso de doação de Sangue
              Total. A duração da coleta em geral é de 5 a 10 minutos e você
              estará assistindo todo o procedimento.
            </p>
          </div>
        </div>
        <img
          className={`${styles.next_step} ${styles.second_step}`}
          src={lfupArrow}
          alt="Próximo passo"
        />
        <div className={styles.step}>
          <h4>DESCANSO E LANCHE</h4>
          <div className={styles.step_content}>
            <p>
              Após a doação você descansará cerca de 10 minutos e em seguida se
              dirigirá à sala de lanches. Lá, enquanto lancha, você pode
              preencher nossa pesquisa de Satisfação e aprender um pouco sobre
              destino da bolsa de sangue que você doou, em “PARA SER LIDO APÓS A
              DOAÇÃO”.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <img
          className={`${styles.next_step} ${styles.third_step}`}
          src={downArrow}
          alt="Próximo passo"
        />
        <div className={styles.step}>
          <h4>EXAMES</h4>
          <div className={styles.step_content}>
            <p>
              Seu sangue será submetido a testes específicos. Além da tipagem
              (Grupo ABO e Rh), serão realizados vários exames para evidenciar
              uma possível infecção por Hepatites B e C, HIV, HTLV, Sífilis e
              Doença de Chagas, e também um exame para detectar uma possível
              alteração na Hemoglobina (proteína do glóbulo vermelho que
              transporta oxigênio para os órgãos e tecidos do corpo). O Centro
              de Controle de Doenças da Prefeitura do Município de São Paulo
              requer que os Bancos de Sangue notifiquem o nome de todos os
              doadores com exames confirmadamente Positivos/Reagentes nos exames
              para as infecções referidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
