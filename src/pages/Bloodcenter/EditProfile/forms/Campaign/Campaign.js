import styles from "./Campaign.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

import Input from "../../../../../components/form/Input/Input";
import Submit from "../../../../../components/form/Submit/Submit";
import Container from "../../../../../components/layout/Container/Container";

const Campaign = () => {
  const [data, setData] = useState({
    nome: "",
    data_inicio: "",
    data_termino: "",
    descricao: "",
    nome_parceria: "",
    foto_capa: "naosei.png",
    logo_parceria: "",
    id_unidade_hemocentro: 2,
  });

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input }));
  };

  return (
    <form className={styles.campaign}>
      <Container title="Campanha" customClass={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.form} ${styles.campaign_data}`}>
            <Input
              placeholder="Nome da campanha"
              /* error={} errorMessage={} */ name="nome"
              value={data.nome || ""}
              handleOnChange={handleOnChange}
            />
            <Input type="file" placeholder="Foto de capa" />
          </div>
        </div>
      </Container>

      <Container title="Mais sobre campanha" customClass={styles.container}>
        <div className={styles.content}>
          <h3>Endereço</h3>
          <div className={styles.form}>
            <div className={styles.right}>
              <Input placeholder="CEP" />
              <Input placeholder="Logradouro" />
              <Input placeholder="Estado" />
              <Input placeholder="Ponto de referência" />
            </div>
            <div className={styles.left}>
              <Input placeholder="Bairro" />
              <Input placeholder="Número" />
              <Input placeholder="Cidade" />
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <h3>Data e hora</h3>
          <div className={`${styles.form} ${styles.date}`}>
            <div className={styles.right}>
              <Input
                custom={styles.input}
                type="date"
                placeholder="Data início"
              />
              <Input custom={styles.input} type="date" placeholder="Data fim" />
            </div>
            <div className={styles.left}>
              <Input custom={styles.input} type="time" placeholder="Hora fim" />
              <Input
                custom={styles.input}
                type="time"
                placeholder="Hora início"
              />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h3>Descrição</h3>
          <Input placeholder="Descrição" />
          <h3>Parceiros</h3>
          <div className={`${styles.form} ${styles.partners}`}>
            <Input placeholder="Nome" />
            <Input type="file" placeholder="Logo" />
          </div>
        </div>

        <HiOutlineTrash
          size={30}
          className={styles.trash_campaign}
          title="Desativar campanha"
        />
      </Container>

      <div className={styles.action}>
        <Submit action="Salvar" customClass={styles.save} />
        <Link>Desativar conta</Link>
      </div>
    </form>
  );
};

export default Campaign;
