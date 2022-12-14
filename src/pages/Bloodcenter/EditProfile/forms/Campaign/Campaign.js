import styles from "./Campaign.module.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useContext, useEffect, useMemo } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { MdErrorOutline, MdOutlinePhoto } from "react-icons/md";

import { AuthContext } from "../../../../../contexts/Auth/AuthContext";

import { storage } from "../../../../../firebaseConfig";
import uuid from "react-uuid";

import Input from "../../../../../components/form/Input/Input";
import Textarea from "../../../../../components/form/Textarea/Textarea";
import Submit from "../../../../../components/form/Submit/Submit";
import Container from "../../../../../components/layout/Container/Container";
import CEPService from "../../../../../services/apiBrasil/CEPService";
import { post } from "../../../../../services/apiBlood/http/post";
import { put } from "../../../../../services/apiBlood/http/put";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getById } from "../../../../../services/apiBlood/http/get";
import { exclude } from "../../../../../services/apiBlood/http/delete";
import ProfileHeader from "../../../../../components/ProfileHeader/ProfileHeader";

const Campaign = ({ setVisible, cape, photo, bloodcenter }) => {
  const auth = useContext(AuthContext);
  //const [disable, setDisable] = useState(false);

  const { id } = useParams();

  const [data, setData] = useState({
    nome: "",
    foto_capa: "",
    data_inicio: "",
    hora_inicio: "",
    data_termino: "",
    hora_termino: "",
    descricao: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    ponto_referencia: "",
    id_unidade_hemocentro: auth.user,
  });

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input }));
  };

  const [errors, setErrors] = useState({
    nome: {
      error: false,
      errorMessage: false,
    },
    foto_capa: {
      error: false,
      icon: "",
      errorMessage: false,
    },
    data_inicio: {
      error: false,
      errorMessage: false,
    },
    data_termino: {
      error: false,
      errorMessage: false,
    },
    cep: {
      error: false,
      errorMessage: false,
    },
    numero: {
      error: false,
      errorMessage: false,
    },
  });

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    setData({ ...data, foto_capa: file });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!data.nome) {
      return setErrors({
        ...errors,
        nome: {
          error: true,
          errorMessage: "Campo obrigat??rio.",
        },
      });
    }

    if (!data.foto_capa) {
      return setErrors({
        ...errors,
        foto_capa: {
          error: true,
          icon: <MdErrorOutline size={20} color="#AA1E1E" />,
          errorMessage: "Escolha uma imagem de capa.",
        },
      });
    }

    if (!data.cep) {
      return setErrors({
        ...errors,
        cep: {
          error: true,
          errorMessage: "Campo obrigat??rio.",
        },
      });
    }

    if (data.cep.length !== 8) {
      return setErrors({
        ...errors,
        cep: {
          error: true,
          errorMessage: "CEP inv??lido.",
        },
      });
    }

    if (!data.numero) {
      return setErrors({
        ...errors,
        numero: {
          error: true,
          errorMessage: "Campo obrigat??rio.",
        },
      });
    }

    if (!data.data_inicio) {
      return setErrors({
        ...errors,
        data_inicio: {
          error: true,
          errorMessage: "Selecione o dia e a hora de in??cio da campanha.",
        },
      });
    }

    if (!data.hora_inicio) {
      return setErrors({
        ...errors,
        data_inicio: {
          error: true,
          errorMessage: "Selecione o dia e a hora de in??cio da campanha.",
        },
      });
    }

    if (!data.data_termino) {
      return setErrors({
        ...errors,
        data_termino: {
          error: true,
          errorMessage: "Selecione o dia e a hora de t??rmino da campanha.",
        },
      });
    }

    if (!data.hora_termino) {
      return setErrors({
        ...errors,
        data_termino: {
          error: true,
          errorMessage: "Selecione o dia e a hora de t??rmino da campanha.",
        },
      });
    }

    if (data.data_inicio > data.data_termino) {
      return setErrors({
        ...errors,
        data_termino: {
          error: true,
          errorMessage: "A data inicial n??o pode ser maior que a data final.",
        },
      });
    }

    setErrors({
      ...errors,
      data_termino: {
        error: false,
        errorMessage: "",
      },
    });

    if (data.data_inicio === data.data_termino) {
      if (data.hora_inicio === data.hora_termino) {
        return setErrors({
          ...errors,
          data_termino: {
            error: true,
            errorMessage:
              "O evento n??o pode iniciar e terminar no mesmo hor??rio.",
          },
        });
      }

      if (data.hora_termino < data.hora_inicio) {
        return setErrors({
          ...errors,
          data_termino: {
            error: true,
            errorMessage: "O evento n??o pode terminar antes de iniciar.",
          },
        });
      }
    }

    const storageRef = ref(storage, `images/${uuid()}`);
    await uploadBytes(storageRef, data.foto_capa);
    const url = await getDownloadURL(storageRef);
    const fileData = data;
    fileData.foto_capa = getFileType(data.foto_capa) ? url : data.foto_capa;

    if (!id) {
      post("/cadastrarCampanha", fileData);
      setData({
        nome: "",
        foto_capa: "",
        data_inicio: "",
        hora_inicio: "",
        data_termino: "",
        hora_termino: "",
        descricao: "",
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        ponto_referencia: "",
        id_unidade_hemocentro: auth.user,
      });
    } else if (id) {
      put("/editarCampanha", id, fileData);
    }
  };

  useEffect(() => {
    if (data.cep.length === 8) {
      CEPService(data.cep).then((resp) => {
        if (resp.message) {
          setErrors({
            ...errors,
            cep: {
              error: true,
              errorMessage: "CEP n??o encontrado.",
            },
          });

          setData((prevState) => {
            return {
              ...prevState,
              logradouro: "",
              bairro: "",
              estado: "",
              cidade: "",
            };
          });
        } else {
          setErrors({
            ...errors,
            cep: {
              error: false,
              errorMessage: "",
            },
          });
        }

        setData((prevState) => {
          return {
            ...prevState,
            logradouro: resp.street,
            bairro: resp.neighborhood,
            estado: resp.state,
            cidade: resp.city,
          };
        });
      });
    } else {
      setData((prevState) => {
        return {
          ...prevState,
          logradouro: "",
          bairro: "",
          estado: "",
          cidade: "",
        };
      });
    }
  }, [data.cep]);

  useEffect(() => {
    if (id) {
      getById("/listarCampanha", id)
        .then((response) => {
          setData({
            nome: response.nome || data.nome,
            foto_capa: response.foto_capa,
            data_inicio: response.data_inicio,
            hora_inicio: response.hora_inicio,
            data_termino: response.data_termino,
            hora_termino: response.hora_termino,
            descricao: response.descricao || data.descricao,
            cep: response.cep,
            logradouro: response.logradouro,
            numero: response.numero || data.numero,
            bairro: response.bairro,
            cidade: response.cidade,
            estado: response.estado,
            ponto_referencia:
              response.ponto_referencia || data.ponto_referencia,
            id_unidade_hemocentro: auth.user,
          });
        })
        .catch((error) => console.error(error));
    }
  }, [
    data.descricao,
    data.nome,
    data.numero,
    data.ponto_referencia,
    id,
    auth.user,
  ]);

  const getFileType = (file) => {
    if (file.type?.match("image.*")) return "image";
    return false;
  };

  const formatImage = useMemo(() => {
    return getFileType(data.foto_capa)
      ? URL.createObjectURL(data.foto_capa)
      : data.foto_capa;
  }, [data.foto_capa]);

  const navigate = useNavigate();

  const deleteCampaign = () => {
    exclude("deletarCampanha", id);
    navigate("/bloodcenter/profile");
  };

  return (
    <form className={styles.campaign} onSubmit={onSubmit}>
      <ProfileHeader
        customHeader={styles.header}
        cape={cape}
        photo={photo}
        bloodcenter={bloodcenter}
      />

      <div className={styles.campaign_tab}>
        <Container title="Campanha" customClass={styles.container}>
          <div className={`${styles.content} ${styles.campaign_data}`}>
            <div className={`${styles.form} ${styles.campaign_data}`}>
              <Input
                id="nome"
                info="Nome da campanha"
                placeholder="Nome da campanha"
                error={errors.nome.error}
                errorMessage={errors.nome.errorMessage}
                name="nome"
                value={data.nome || ""}
                handleOnChange={handleOnChange}
                onFocus={() => setErrors({ ...errors, nome: false })}
                autoFocus
              />
              <div className={styles.input_container}>
                <label>Foto de capa</label>
                <label
                  htmlFor="file"
                  className={styles.file_input}
                  onFocus={() => setErrors({ ...errors, foto_capa: false })}
                >
                  {data.foto_capa ? (
                    <>
                      <MdOutlinePhoto size={30} />
                      <label htmlFor="file" title="Escolha uma foto de capa">
                        <img
                          src={formatImage}
                          alt="Foto da campanha"
                          className={styles.foto_capa}
                        />
                      </label>
                    </>
                  ) : (
                    <>
                      <MdOutlinePhoto size={30} />
                      Foto de capa
                    </>
                  )}
                </label>
              </div>
              <input
                id="file"
                className={styles.file}
                type="file"
                onChange={handleFile}
              />
              <div className={styles.message}>
                {errors.foto_capa.error && (
                  <>
                    <span>{errors.foto_capa.icon}</span>
                    <span>{errors.foto_capa.errorMessage}</span>
                  </>
                )}
              </div>
            </div>
            <div></div>
          </div>
        </Container>

        <Container title="Mais sobre campanha" customClass={styles.container}>
          <div className={styles.content}>
            <h3>Endere??o</h3>
            <div className={styles.form}>
              <div className={styles.right}>
                <Input
                  id="cep"
                  mask="00000-000"
                  placeholder="CEP"
                  info="CEP"
                  name="cep"
                  error={errors.cep.error}
                  errorMessage={errors.cep.errorMessage}
                  value={data.cep || ""}
                  handleOnChange={handleOnChange}
                  onFocus={() => setErrors({ ...errors, cep: false })}
                />
                <Input
                  placeholder="Logradouro"
                  info="Logradouro"
                  name="logradouro"
                  value={data.logradouro || ""}
                  handleOnChange={handleOnChange}
                  disabled
                />
                <Input
                  placeholder="N??mero"
                  info="N??mero"
                  name="numero"
                  error={errors.numero.error}
                  errorMessage={errors.numero.errorMessage}
                  value={data.numero || ""}
                  handleOnChange={handleOnChange}
                  onFocus={() => setErrors({ ...errors, numero: false })}
                />

                <Input
                  placeholder="Ponto de refer??ncia"
                  info="Ponto de refer??ncia"
                  value={data.ponto_referencia || ""}
                  name="ponto_referencia"
                  handleOnChange={handleOnChange}
                />
              </div>
              <div className={styles.left}>
                <Input
                  placeholder="Bairro"
                  info="Bairro"
                  name="bairro"
                  value={data.bairro || ""}
                  handleOnChange={handleOnChange}
                  disabled
                />
                <Input
                  placeholder="Cidade"
                  info="Cidade"
                  name="cidade"
                  value={data.cidade || ""}
                  handleOnChange={handleOnChange}
                  disabled
                />
                <Input
                  placeholder="Estado"
                  info="Estado"
                  name="estado"
                  value={data.estado || ""}
                  handleOnChange={handleOnChange}
                  disabled
                />
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <h3>Data e hora</h3>
            <div className={`${styles.form} ${styles.date}`}>
              <div className={styles.date_right}>
                <Input
                  custom={styles.input}
                  type="date"
                  info="Data in??cio"
                  name="data_inicio"
                  value={data.data_inicio || ""}
                  handleOnChange={handleOnChange}
                  onFocus={() => setErrors({ ...errors, data_inicio: false })}
                />
                <Input
                  custom={styles.input}
                  type="time"
                  info="Hora in??cio"
                  name="hora_inicio"
                  value={data.hora_inicio || ""}
                  handleOnChange={handleOnChange}
                  onFocus={() => setErrors({ ...errors, data_inicio: false })}
                />
              </div>
              <div className={styles.message}>
                {errors.data_inicio.error && (
                  <>
                    <MdErrorOutline size={20} color="#AA1E1E" />{" "}
                    <span>{errors.data_inicio.errorMessage}</span>
                  </>
                )}
              </div>
              <div className={styles.date_left}>
                <Input
                  custom={styles.input}
                  type="date"
                  info="Data t??rmino"
                  name="data_termino"
                  value={data.data_termino || ""}
                  handleOnChange={handleOnChange}
                  onFocus={() => setErrors({ ...errors, data_termino: false })}
                />
                <Input
                  custom={styles.input}
                  type="time"
                  info="Hora t??rmino"
                  name="hora_termino"
                  value={data.hora_termino || ""}
                  handleOnChange={handleOnChange}
                  onFocus={() => setErrors({ ...errors, data_termino: false })}
                />
              </div>
              <div className={styles.message}>
                {errors.data_termino.error && (
                  <>
                    <MdErrorOutline size={20} color="#AA1E1E" />{" "}
                    <span>{errors.data_termino.errorMessage}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h3>Descri????o</h3>
            <Textarea
              placeholder="Descri????o"
              info="Descri????o"
              name="descricao"
              value={data.descricao || ""}
              handleOnChange={handleOnChange}
            />
          </div>
          {id && (
            <HiOutlineTrash
              size={30}
              className={styles.trash_campaign}
              title="Desativar campanha"
              onClick={deleteCampaign}
            />
          )}
        </Container>

        <div className={styles.action}>
          <Submit action="Salvar" customClass={styles.save} />

          <Link
            onClick={(e) => {
              e.preventDefault();
              setVisible(true);
            }}
          >
            Desativar conta
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Campaign;
