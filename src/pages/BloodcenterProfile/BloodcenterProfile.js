import { useEffect, useState, useContext } from "react";

import { AiOutlineWhatsApp } from "react-icons/ai";

import styles from "./BloodcenterProfile.module.css";

import profile from "../../assets/bloobs/profile 1.1.svg";
import cape from "../../assets/bloobs/cape.svg";

import { getById } from "../../services/apiBlood/http/get";
import { capitalize } from "../../utils/capitalize";
import { phoneMask, cepMask } from "../../utils/masks";

import Menu from "../../components/layout/Menu/Menu";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import AboutBloodcenter from "../../components/AboutBloodcenter/AboutBloodcenter";
import Inventory from "../../components/Inventory/Inventory";
import CampaignSlider from "../../components/donativeCampaign/CampaignSlider/CampaignSlider";
import CampaignCard from "../../components/donativeCampaign/CampaignCard/CampaignCard";

import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useParams } from "react-router-dom";

const BloodcenterProfile = () => {
  const [currentInventory, setCurrentInventory] = useState([]);

  const auth = useContext(AuthContext);

  const { id } = useParams();

  const [data, setData] = useState({});

  const [campaign, setCampain] = useState([]);

  useEffect(() => {
    getById("/listarHemocentroPorId", id).then((response) => {
      let error = response.error;

      if (response.error) {
        return setData({ error });
      } else {
        const resp = response[0][0];

        setData((prevState) => {
          return {
            ...prevState,
            nome_unidade: resp.nome_unidade,
            logradouro: resp.logradouro.split(",")[0],
            numero: resp.numero,
            bairro: capitalize(resp.bairro),
            cidade: resp.cidade,
            estado: resp.uf,
            cep: cepMask(resp.cep),
            ponto_referencia: resp.ponto_referencia
              ? resp.ponto_referencia
              : "",
            biografia: resp.biografia
              ? resp.biografia
              : "Ainda não temos essa informação.",
            horario_atendimento: resp.horario_atendimento
              ? resp.horario_atendimento
              : "Ainda não temos essa informação.",
            telefone: resp.telefone
              ? phoneMask(resp.telefone)
              : "Ainda não temos essa informação.",
            celular: phoneMask(resp.celular),
            email: resp.email,
            foto_perfil: resp.foto_perfil,
            foto_capa: resp.foto_capa,
          };
        });
      }
    });

    getById("/listarEstoqueSangue", id).then((data) =>
      setCurrentInventory(data[0])
    );
  }, [auth.user, id]);

  useEffect(() => {
    getById("/listarCampanhas", id)
      .then((response) => {
        setCampain(response);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className={styles.profile_container}>
      <Menu
        label="Hemocentros"
        alt="Lista de hemocentros"
        title="Lista de hemocentros"
      />

      <div className={styles.profile_content}>
        <ProfileHeader
          customHeader={styles.header}
          bloodcenter={data.nome_unidade}
          photo={data.foto_perfil ? data.foto_perfil : profile}
          cape={data.foto_capa ? data.foto_capa : cape}
        />
        {!data.error ? (
          <>
            <div className={styles.introduction}>
              <h2>{data.nome_unidade}</h2>
              <p>
                {data.logradouro +
                  ", " +
                  data.numero +
                  " - " +
                  data.bairro +
                  ", " +
                  data.cidade +
                  " - " +
                  data.estado +
                  ", " +
                  data.cep +
                  ". " +
                  data.ponto_referencia}
              </p>
            </div>

            <AboutBloodcenter
              biography={data.biografia}
              opening={data.horario_atendimento}
              telephone={data.telefone}
              celular={data.celular}
              email={data.email}
              services={data.tipo_servico}
            />

            {currentInventory.length > 0 && (
              <Inventory
                title="Nosso estoque"
                currentInventory={currentInventory}
              />
            )}

            {campaign.length > 0 && (
              <CampaignSlider
                customClass={styles.our_campaigns}
                title="Nossas campanhas"
                items={campaign.length}
              >
                {campaign &&
                  campaign.map((item) => (
                    <CampaignCard
                      link={`/campaign/${item.id}`}
                      key={item.id}
                      title={item.nome}
                      background={item.foto_capa}
                    />
                  ))}
              </CampaignSlider>
            )}

            <div className={styles.whatsapp}>
              <a
                href={`https://wa.me/55${
                  data.celular && data.celular.replace(/[^0-9]+/g, "")
                }`}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp size={50} color="#000" />
              </a>
            </div>
          </>
        ) : (
          <h1 className={styles.error}>{data.error}</h1>
        )}
      </div>
    </div>
  );
};

export default BloodcenterProfile;
