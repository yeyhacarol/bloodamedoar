import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

import { CircleMenu, CircleMenuItem } from "react-circular-menu";

import { FiCalendar, FiSmile, FiDroplet, FiLogIn } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";

import profile from "../../../assets/bloobs/profile 1.1.svg";
import cape from "../../../assets/bloobs/cape.svg";

import styles from "./Profile.module.css";

import { getById } from "../../../services/apiBlood/http/get";
import { capitalize } from "../../../utils/capitalize";
import { phoneMask, cepMask } from "../../../utils/masks";

import Menu from "../../../components/layout/Menu/Menu";
import ProfileHeader from "../../../components/ProfileHeader/ProfileHeader";
import AboutBloodcenter from "../../../components/AboutBloodcenter/AboutBloodcenter";
import Inventory from "../../../components/Inventory/Inventory";
import CampaignSlider from "../../../components/donativeCampaign/CampaignSlider/CampaignSlider";
import CampaignCard from "../../../components/donativeCampaign/CampaignCard/CampaignCard";

const Profile = () => {
  const [tabIndex, setTabIndex] = useState();
  const [currentInventory, setCurrentInventory] = useState([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();

    navigate("/");
  };

  let rotationAngle = Math.round(window.innerWidth);

  if (rotationAngle < 1025) {
    rotationAngle = -190;
  } else {
    rotationAngle = 360;
  }

  const [data, setData] = useState({
    nome_unidade: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    ponto_referencia: "",
    biografia: "",
    horario_atendimento: "",
    telefone: "",
    celular: "",
    email: "",
    tipo_servico: "",
    foto_perfil: "",
    foto_capa: "",
  });

  const [campaign, setCampain] = useState([]);

  useEffect(() => {
    getById("/listarHemocentroPorId", auth.user).then((response) => {
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
          ponto_referencia: resp.ponto_referencia ? resp.ponto_referencia : "",
          biografia: resp.biografia
            ? resp.biografia
            : "Você ainda não cadastrou essa informação.",
          horario_atendimento: resp.horario_atendimento
            ? resp.horario_atendimento
            : "Você ainda não cadastrou essa informação.",
          telefone: resp.telefone ? phoneMask(resp.telefone) : null,
          celular: phoneMask(resp.celular),
          email: resp.email,
          foto_perfil: resp.foto_perfil,
          foto_capa: resp.foto_capa,
          tipo_servico: [],
        };
      });
    });

    getById("/listarEstoqueSangue", auth.user).then((data) =>
      setCurrentInventory(data[0])
    );
  }, [auth.user]);

  useEffect(() => {
    getById("/listarCampanhas", auth.user)
      .then((response) => {
        setCampain(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.profile_container}>
      <Menu
        label="Hemocentros"
        alt="Lista de hemocentros"
        title="Lista de hemocentros"
      />

      {auth.user && (
        <div className={styles.out}>
          <FiLogIn size={40} title="Sair?" onClick={handleLogout} />
          <span className={styles.tooltip}>Sair?</span>
        </div>
      )}

      <div className={styles.profile_content}>
        <ProfileHeader
          cape={data.foto_capa ? data.foto_capa : cape}
          photo={data.foto_perfil ? data.foto_perfil : profile}
          bloodcenter={data.nome_unidade}
        />

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
        {currentInventory.length > 0 ? (
          <Inventory
            title="Nosso estoque"
            currentInventory={currentInventory}
          />
        ) : (
          <Inventory title="Nosso estoque" currentInventory={currentInventory}>
            <p>
              Você ainda não cadastrou nada no seu estoque. Pode realizar essa
              ação por meio da aba de editar perfil.
            </p>
          </Inventory>
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
                  editLink={`/bloodcenter/profile/edit/${3}/${item.id}`}
                  key={item.id}
                  bloodcenterCard={true}
                  title={item.nome}
                  background={item.foto_capa}
                />
              ))}
          </CampaignSlider>
        )}

        <CircleMenu
          className={styles.menu}
          startAngle={-90}
          rotationAngle={rotationAngle}
          itemSize={1.5}
          radius={2.5}
          rotationAngleInclusive={false}
        >
          <CircleMenuItem tooltip="Criar campanha" className={styles.menu_item}>
            <FiSmile size={20} />
          </CircleMenuItem>
          <CircleMenuItem tooltip="Estoque" className={styles.menu_item}>
            <FiDroplet size={20} />
          </CircleMenuItem>
          <CircleMenuItem tooltip="Agenda" className={styles.menu_item}>
            <FiCalendar size={20} />
          </CircleMenuItem>
          <CircleMenuItem
            tooltip="Consultas agendadas"
            className={styles.menu_item}
          >
            <AiOutlineHistory size={20} />
          </CircleMenuItem>
        </CircleMenu>
      </div>
    </div>
  );
};

export default Profile;
