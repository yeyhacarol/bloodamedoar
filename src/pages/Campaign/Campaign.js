import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getById } from "../../services/apiBlood/http/get";
import { dateMask } from "../../utils/masks";

import styles from "./Campaign.module.css";

import Logo from "../../components/logo/IconLogo/IconLogo";
import Menu from "../../components/layout/Menu/Menu";

const Campaign = () => {
  const { id } = useParams();
  const [campaign, setCampain] = useState();

  useEffect(() => {
    getById("/listarCampanha", id)
      .then((resp) => {
        setCampain(resp);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!campaign) {
    return <>Carregando...</>;
  }

  return (
    <>
      {campaign && (
        <>
          <Menu label="Consultas" title="Consultas" />
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.campaign_container}>
            <div className={styles.cape}>
              <img
                className={styles.cape_photo}
                src={campaign.foto_capa}
                alt={campaign.nome}
              ></img>
            </div>
            <div className={styles.container_content}>
              <div className={styles.content}>
                <h1>{campaign.nome}</h1>

                <div className={styles.data_container}>
                  <div className={styles.data}>
                    <h3>Endereço</h3>
                    <p>
                      {campaign.logradouro +
                        ", " +
                        campaign.numero +
                        " - " +
                        campaign.bairro +
                        ", " +
                        campaign.cidade +
                        " - " +
                        campaign.estado +
                        ", " +
                        campaign.cep +
                        ". " +
                        campaign.ponto_referencia}
                    </p>
                  </div>
                  <div className={styles.data}>
                    <h3>Horários</h3>
                    <div className={styles.timetable}>
                      <div className={styles.timetable_data}>
                        <p>Início:</p>
                        <p>{dateMask(campaign.data_inicio)}</p>
                        <p>{campaign.hora_inicio}</p>
                      </div>
                      <div className={styles.timetable_data}>
                        <p>Término:</p>
                        <p>{dateMask(campaign.data_termino)}</p>
                        <p>{campaign.hora_termino}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.data}>
                    <h3>Detalhes</h3>
                    <p>
                      {campaign.descricao
                        ? campaign.descricao
                        : "Não há mais detalhes sobre o evento. "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Campaign;
