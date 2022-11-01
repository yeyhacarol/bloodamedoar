import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

import { CircleMenu, CircleMenuItem } from "react-circular-menu";

import { FiCalendar, FiSmile, FiDroplet, FiLogIn } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";

import styles from "./Profile.module.css";

import getById from "../../../services/apiBlood/getById";
import { capitalize } from "../../../utils/capitalize";
import { phoneMask, formatCep } from "../../../utils/masks";

import Menu from "../../../components/layout/Menu/Menu";
import ProfileHeader from "../../../components/ProfileHeader/ProfileHeader";
import AboutBloodcenter from "../../../components/AboutBloodcenter/AboutBloodcenter";
import Inventory from "../../../components/Inventory/Inventory";
import CampaignSlider from "../../../components/donativeCampaign/CampaignSlider/CampaignSlider";
import CampaignCard from "../../../components/donativeCampaign/CampaignCard/CampaignCard";

import donation from "../../../assets/blood-donation.jpg";

const Profile = () => {
  const [tabIndex, setTabIndex] = useState();

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
    biografia: "",
    horario_atendimento: "",
    telefone: "",
    celular: "",
    email: "",
    tipo_servico: "",
  });

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
          cep: formatCep(resp.cep),
          biografia: resp.biografia
            ? resp.biografia
            : "Você ainda não cadastrou essa informação.",
          horario_atendimento: resp.horario_atendimento
            ? resp.horario_atendimento
            : "Você ainda não cadastrou essa informação.",
          telefone: resp.telefone ? phoneMask(resp.telefone) : null,
          celular: phoneMask(resp.celular),
          email: resp.email,
          tipo_servico: [],
        };
      });
    });
  }, []);

  return (
    <div className={styles.profile_container}>
      <Menu
        label="Consultas"
        alt="Lista de consultas"
        title="Lista de consultas"
      />

      {auth.user && (
        <div className={styles.out}>
          <FiLogIn size={40} title="Sair?" onClick={handleLogout} />
          <span className={styles.tooltip}>Sair?</span>
        </div>
      )}

      <div className={styles.profile_content}>
        <ProfileHeader />

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
              data.cep}
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

        <Inventory title="Nosso estoque" />

        <CampaignSlider
          customClass={styles.our_campaigns}
          title="Nossas campanhas"
        >
          <CampaignCard
            bloodcenterCard={true}
            title="SEJA O HERÓI DE ALGUÉM"
            catchphrase="Você pode salvar muitas vidas em apenas 15 minutos!"
            background={donation}
          />
        </CampaignSlider>

        <CircleMenu
          className={styles.menu}
          startAngle={-90}
          rotationAngle={rotationAngle}
          itemSize={1.5}
          radius={3}
          rotationAngleInclusive={false}
        >
          <CircleMenuItem
            tooltip="Criar campanha"
            className={styles.menu_item}
            onClick={() => setTabIndex(tabIndex)}
          >
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
