import { useState, useEffect } from "react";
import styles from "./BloodcenterData.module.css";

import typeDonation from "../../../../../services/apiBlood/typeDonationService";

import Container from "../../../../../components/layout/Container/Container";
import Input from "../../../../../components/form/Input/Input";
import Selection from "../../../../../components/form/Select/Selection";
import Submit from "../../../../../components/form/Submit/Submit";
import { Link } from "react-router-dom";

const BloodcenterData = () => {
  const [data, setData] = useState({
    nome_unidade: "",
    unity: false,
    unidade_sede: false,
    nome_sede: "",
    cnpj: "",
    id_tipo_servico: [],
    cep: "",
  });

  const [id_tipo_servico, setId_tipo_servico] = useState([]);

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

  return (
    <form className={styles.bloodcenter_data}>
      <Container
        title="Hemocentro"
        customClass={`${styles.container} ${styles.bloodcenter}`}
      >
        <div className={styles.content}>
          <Input
            placeholder="Nome do hemocentro" /* error={} errorMessage={} name="nome_unidade" value={} handleOnChange={} */
          />
          <div className={styles.chk}>
            <Input type="checkbox" label="Sou unidade" />
            <Input type="checkbox" label="Sou sede" />
          </div>
          <Input placeholder="Nome da sede" />
        </div>
      </Container>

      <Container title="Endereço" customClass={styles.container}>
        <div className={styles.content}>
          <div className={styles.address}>
            <Input placeholder="CEP" />
            <Input placeholder="Bairro" />
          </div>
          <div className={styles.address}>
            <Input placeholder="Logradouro" />
            <Input placeholder="Estado" />
          </div>
          <div className={styles.address}>
            <Input placeholder="Número" />
            <Input placeholder="Cidade" />
          </div>
          <Input placeholder="Ponto de referência" custom={styles.text_area} />
        </div>
      </Container>

      <Container title="Biografia" customClass={styles.container}>
        <div className={styles.content}>
          <Input placeholder="Sobre nós" custom={styles.text_area} />
          <Input
            placeholder="Horário de atendimento"
            custom={styles.text_area}
          />
          <Selection
            width=""
            closeMenuOnSelect="false"
            placeholder="Tipos de serviço"
            /* error={errors.id_tipo_servico.type}
          errorMessage={errors.id_tipo_servico.errorMessage}
          name="id_tipo_servico" */
            message="Sem serviços"
            value={data.id_tipo_servico}
            options={id_tipo_servico && id_tipo_servico}
            /* handleOnChange={handleOnChange} */
          />
        </div>
      </Container>

      <Container title="Contato" customClass={styles.container}>
        <div className={styles.content}>
          <Input placeholder="Telefone" />
          <Input placeholder="Celular" />
          <Input type="email" placeholder="E-mail" />
        </div>
      </Container>

      <div className={styles.action}>
        <Submit action="Salvar" />
        <Link>Desativar conta</Link>
      </div>
    </form>
  );
};

export default BloodcenterData;
