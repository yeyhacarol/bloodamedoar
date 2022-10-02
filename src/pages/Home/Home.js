import styles from "./Home.module.css";

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
            <div className={styles.see_requirements}>
              <h3>
                Veja os <span>requisitos</span>
              </h3>
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
                <div className={styles.fourth_req}>
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
              <div className={styles.impediments_bloobs}>
                <div className={styles.first_imp}>
                  <img src={imp1} alt="Resfriados e sintomas de gripe." />
                  <p>Resfriados e sintomas de gripe.</p>
                </div>
                <div className={styles.second_imp}>
                  <img
                    src={imp2}
                    alt="Gravidez, 90 dias após parto normal e 180 dias após cesariana, amamentação (se o parto ocorreu há menos de 12 meses)."
                  />
                  <p>
                    Gravidez, 90 dias após parto normal e 180 dias após
                    cesariana, amamentação (se o parto ocorreu há menos de 12
                    meses).
                  </p>
                </div>
                <div className={styles.third_imp}>
                  <img src={imp3} alt="Procedimentos endoscópicos." />
                  <p>Procedimentos endoscópicos.</p>
                </div>
                <div className={styles.fourth_imp}>
                  <img
                    src={imp4}
                    alt="Procedimentos dentários: extração dentária (verificar uso de medicação) ou tratamento de canal (verificar medicação). Cirurgia odontológica com anestesia geral."
                  />
                  <p>
                    Procedimentos dentários: extração dentária (verificar uso de
                    medicação) ou tratamento de canal (verificar medicação).
                    Cirurgia odontológica com anestesia geral.
                  </p>
                </div>
                <div className={styles.fifth_imp}>
                  <img src={imp5} alt="Vacinações de vários tipos." />
                  <p>Vacinações de vários tipos.</p>
                </div>
                <div className={styles.sixth_imp}>
                  <img
                    src={imp6}
                    alt="Tatuagem, maquiagem definitiva e micropigmentação de 6 a 12 meses."
                  />
                  <p>
                    Tatuagem, maquiagem definitiva e micropigmentação de 6 a 12
                    meses.
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

          <section className={styles.step_by_step}>
            <h2>
              Veja o passo a passo de como a doação é feita depois do
              agendamento e o pós-doação
            </h2>
            <div className={styles.top}>
              <div className={styles.step}>
                <h4>VOTO DE AUTOEXCLUSÃO</h4>
                <div className={styles.step_content}>
                  <p>
                    Visando máxima segurança para o paciente que receberá
                    transfusão de seu sangue, se ao final da análise da triagem
                    você for considerado apto para doação, mas não tiver
                    respondido algumas questões confidenciais, haverá a
                    oportunidade íntima de você indicar que seu sangue não
                    deverá ser utilizado em transfusão.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <h4>VOTO DE AUTOEXCLUSÃO</h4>
                <div className={styles.step_content}>
                  <p>
                    Independentemente de seu “Voto de Autoexclusão” ser sido SIM
                    ou NÃO, em seguida, você será encaminhado à sala de coleta.
                    Será colhido cerca de 450 ml de seu sangue em caso de doação
                    de Sangue Total. A duração da coleta em geral é de 5 a 10
                    minutos e você estará assistindo todo o procedimento.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <h4>DESCANSO E LANCHE</h4>
                <div className={styles.step_content}>
                  <p>
                    Após a doação você descansará cerca de 10 minutos e em
                    seguida se dirigirá à sala de lanches. Lá, enquanto lancha,
                    você pode preencher nossa pesquisa de Satisfação e aprender
                    um pouco sobre destino da bolsa de sangue que você doou, em
                    “PARA SER LIDO APÓS A DOAÇÃO”.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.step}>
                <h4>EXAMES</h4>
                <div className={styles.step_content}>
                  <p>
                    Seu sangue será submetido a testes específicos. Além da
                    tipagem (Grupo ABO e Rh), serão realizados vários exames
                    para evidenciar uma possível infecção por Hepatites B e C,
                    HIV, HTLV, Sífilis e Doença de Chagas, e também um exame
                    para detectar uma possível alteração na Hemoglobina
                    (proteína do glóbulo vermelho que transporta oxigênio para
                    os órgãos e tecidos do corpo). O Centro de Controle de
                    Doenças da Prefeitura do Município de São Paulo requer que
                    os Bancos de Sangue notifiquem o nome de todos os doadores
                    com exames confirmadamente Positivos/Reagentes nos exames
                    para as infecções referidas.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
