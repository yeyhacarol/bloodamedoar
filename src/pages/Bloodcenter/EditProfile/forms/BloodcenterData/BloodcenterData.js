import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./BloodcenterData.module.css";

import { AuthContext } from "../../../../../contexts/Auth/AuthContext";
import { getById } from "../../../../../services/apiBlood/http/get";
import { cepMask } from "../../../../../utils/masks";

import Container from "../../../../../components/layout/Container/Container";
import Input from "../../../../../components/form/Input/Input";
import Submit from "../../../../../components/form/Submit/Submit";
import Textarea from "../../../../../components/form/Textarea/Textarea";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import uuid from "react-uuid";
import { put } from "../../../../../services/apiBlood/http/put";
import { storage } from "../../../../../firebaseConfig";
import { useMemo } from "react";
import EditProfileHeader from "../../../../../components/ProfileHeader/EditProfileHeader/EditProfileHeader";

const BloodcenterData = ({ setVisible }) => {
  const auth = useContext(AuthContext);

  const [data, setData] = useState({
    cnpj: "",
    nome_unidade: "",
    unidade_sede: false,
    nome_sede: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    ponto_referencia: "",
    biografia: "",
    horario_atendimento: "",
    tipo_servico: [],
    telefone: "",
    celular: "",
    email: "",
    foto_capa: "",
    foto_perfil: "",
  });

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input }));
  };

  const handleCape = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    setData({ ...data, foto_capa: file });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    setData({ ...data, foto_perfil: file });
  };

  useEffect(() => {
    getById("/listarHemocentroPorId", auth.user).then((response) => {
      const resp = response[0][0];

      setData((prevState) => {
        return {
          ...prevState,
          cnpj: resp.cnpj,
          nome_unidade: resp.nome_unidade,
          unidade_sede: resp.unidade_sede,
          nome_sede: resp.nome_sede,
          logradouro: resp.logradouro,
          numero: resp.numero,
          bairro: resp.bairro,
          cidade: resp.cidade,
          estado: resp.uf,
          ponto_referencia: data.ponto_referencia || resp.ponto_referencia,
          cep: cepMask(resp.cep),
          biografia: data.biografia || resp.biografia,
          horario_atendimento:
            data.horario_atendimento || resp.horario_atendimento,
          //tipo_servico: data.tipo_servico || resp.tipo_servico,
          telefone: data.telefone || resp.telefone,
          celular: data.celular || resp.celular,
          email: resp.email,
          foto_capa: resp.foto_capa,
          foto_perfil: resp.foto_perfil,
        };
      });
    });
  }, []);

  const [errors, setErrors] = useState({
    telefone: {
      error: false,
      errorMessage: false,
    },
    celular: {
      error: false,
      errorMessage: false,
    },
  });

  const edit = async (e) => {
    e.preventDefault();

    if (!data.celular) {
      return setErrors({
        ...errors,
        celular: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    if (data.celular.length !== 11) {
      return setErrors({
        ...errors,
        celular: {
          error: true,
          errorMessage: "Número inválido.",
        },
      });
    }

    if (data.telefone && data.telefone.length !== 10) {
      return setErrors({
        ...errors,
        telefone: {
          error: true,
          errorMessage: "Número inválido.",
        },
      });
    }

    const storageRef = ref(storage, `bloodcenter/profile/${uuid()}`);
    await uploadBytes(storageRef, data.foto_perfil);
    const url = await getDownloadURL(storageRef);
    const fileData = data;
    fileData.foto_perfil = getFileType(data.foto_perfil)
      ? url
      : data.foto_perfil;

    const storageRef2 = ref(storage, `bloodcenter/cape/${uuid()}`);
    await uploadBytes(storageRef2, data.foto_capa);
    const url2 = await getDownloadURL(storageRef2);
    const fileData2 = fileData;
    fileData2.foto_capa = getFileType(data.foto_capa) ? url2 : data.foto_capa;

    put("/atualizarHemocentro", auth.user, fileData2);
  };

  const getFileType = (file) => {
    if (file?.type?.match("image.*")) return "image";
    return false;
  };

  const formatImage = useMemo(() => {
    return getFileType(data.foto_perfil)
      ? URL.createObjectURL(data.foto_perfil)
      : data.foto_perfil;
  }, [data.foto_perfil]);

  const formatImage2 = useMemo(() => {
    return getFileType(data.foto_capa)
      ? URL.createObjectURL(data.foto_capa)
      : data.foto_capa;
  }, [data.foto_capa]);

  /*   const [id_tipo_servico, setId_tipo_servico] = useState([]);

  useEffect(() => {
    let id_tipo_servico = [];

    typeDonation().then((resp) => {
      resp.map((service) => {
        return id_tipo_servico.push({
          value: `${service.id}`,
          label: service.tipo_servico,
        });
      });

      setId_tipo_servico(id_tipo_servico);
    });
  }, []);
 */

  return (
    <div className={styles.bloodcenter_container}>
      <form className={styles.bloodcenter_data} onSubmit={edit}>
        <EditProfileHeader
          capeOnChange={handleCape}
          photoOnChange={handlePhoto}
          background={formatImage2}
          bloodcenter={formatImage}
        />

        <div className={styles.bloodcenter_tab}>
          <Container
            title="Hemocentro"
            customClass={`${styles.container} ${styles.bloodcenter}`}
          >
            <div className={styles.content}>
              <Input
                info="Nome unidade"
                name="nome_unidade"
                value={data.nome_unidade}
                disabled={true}
              />
              <Input
                name="unidade_sede"
                type="checkbox"
                label="Sou sede"
                checked={data.unidade_sede}
                disabled={true}
              />
              <Input
                info="Nome sede"
                name="nome_sede"
                value={data.nome_sede && data.nome_sede}
                disabled={true}
              />
            </div>
          </Container>

          <Container title="Endereço" customClass={styles.container}>
            <div className={`${styles.content} ${styles.address}`}>
              <div className={styles.right}>
                <Input info="CEP" name="cep" value={data.cep} disabled={true} />
                <Input
                  name="logradouro"
                  info="Logradouro"
                  value={data.logradouro}
                  disabled={true}
                />
                <Input
                  name="estado"
                  info="Estado"
                  value={data.estado}
                  disabled={true}
                />
                <Input
                  name="ponto_referencia"
                  info="Ponto de referência"
                  placeholder="Ponto de referência"
                  custom={styles.text_area}
                  value={data.ponto_referencia || ""}
                  handleOnChange={handleOnChange}
                />
              </div>

              <div className={styles.left}>
                <Input
                  name="bairro"
                  info="Bairro"
                  value={data.bairro}
                  disabled={true}
                />
                <Input
                  name="numero"
                  info="Número"
                  value={data.numero}
                  disabled={true}
                />
                <Input
                  name="cidade"
                  info="Cidade"
                  value={data.cidade}
                  disabled={true}
                />
              </div>
            </div>
          </Container>

          <Container title="Biografia" customClass={styles.container}>
            <div className={styles.content}>
              <Textarea
                name="biografia"
                placeholder="Sobre nós"
                info="Sobre nós"
                value={data.biografia || ""}
                handleOnChange={handleOnChange}
              />
              <Textarea
                name="horario_atendimento"
                placeholder="Horário de atendimento"
                info="Horário de atendimento"
                value={data.horario_atendimento || ""}
                handleOnChange={handleOnChange}
              />
              {/* <Selection
            isMulti={true}
            closeMenuOnSelect="false"
            placeholder="Tipos de serviço"
            name="tipo_servico"
            message="Sem serviços"
            value={data.tipo_servico}
            options={id_tipo_servico && id_tipo_servico}
            handleOnChange={handleOnChange}
          /> */}
            </div>
          </Container>

          <Container
            title="Contato"
            customClass={`${styles.container} ${styles.contact}`}
          >
            <div className={styles.content}>
              <Input
                name="telefone"
                placeholder="Telefone"
                info="Telefone"
                mask="(00) 0000-0000"
                error={errors.telefone.error}
                errorMessage={errors.telefone.errorMessage}
                value={data.telefone || ""}
                handleOnChange={handleOnChange}
                onFocus={() => setErrors({ ...errors, telefone: false })}
                autoComplete="off"
              />
              <Input
                name="celular"
                placeholder="Celular"
                info="Celular"
                error={errors.celular.error}
                errorMessage={errors.celular.errorMessage}
                mask="(00) 00000-0000"
                value={data.celular || ""}
                handleOnChange={handleOnChange}
                onFocus={() => setErrors({ ...errors, celular: false })}
                autoComplete="off"
              />
              <Input
                name="email"
                type="email"
                placeholder="E-mail"
                info="E-mail"
                value={data.email || ""}
                handleOnChange={handleOnChange}
              />
            </div>
          </Container>

          <div className={styles.action}>
            <Submit
              action="Salvar"
              customClass={styles.save}
              //handleOnClick={edit}
            />
            <Link
              onClick={() => {
                setVisible(true);
              }}
            >
              Desativar conta
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BloodcenterData;
