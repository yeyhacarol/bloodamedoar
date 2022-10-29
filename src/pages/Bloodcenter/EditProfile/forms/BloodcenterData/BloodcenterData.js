import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./BloodcenterData.module.css";

import getById from "../../../../../services/apiBlood/getById";
import { formatCep } from "../../../../../utils/masks";

import Container from "../../../../../components/layout/Container/Container";
import Input from "../../../../../components/form/Input/Input";
import Submit from "../../../../../components/form/Submit/Submit";

const BloodcenterData = () => {
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
  });

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input }));
  };

  /* let id = 2;

  useEffect(() => {
    getById("/cadastrarHemocentro", id).then((resp) => {
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
          estado: resp.estado,
          ponto_referencia: data.ponto_referencia || resp.ponto_referencia,
          cep: formatCep(resp.cep),
          biografia: data.biografia || resp.biografia,
          horario_atendimento:
            data.horario_atendimento || resp.horario_atendimento,
          //tipo_servico: data.tipo_servico || resp.tipo_servico,
          telefone: data.telefone || resp.telefone,
          celular: data.celular || resp.celular,
          email: resp.email,
        };
      });

      console.log(data);
    });
  }, []);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const edit = (e) => {
    e.preventDefault();

    fetch(BASE_URL + `/cadastrarHemocentro/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }; */

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
    <form className={styles.bloodcenter_data} /* onSubmit={edit} */>
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
          <Input
            name="biografia"
            placeholder="Sobre nós"
            info="Sobre nós"
            custom={styles.text_area}
            value={data.biografia || ""}
            handleOnChange={handleOnChange}
          />
          <Input
            name="horario_atendimento"
            placeholder="Horário de atendimento"
            info="Horário de atendimento"
            custom={styles.text_area}
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
            value={data.telefone || ""}
            handleOnChange={handleOnChange}
          />
          <Input
            name="celular"
            placeholder="Celular"
            info="Celular"
            mask="(00) 00000-0000"
            value={data.celular || ""}
            handleOnChange={handleOnChange}
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
        <Link>Desativar conta</Link>
      </div>
    </form>
  );
};

export default BloodcenterData;
