const url = "http://localhost:5000/loginHemocentro";

const validateToken = async (token) => {
  return {
    user: {
      nome_unidade: "SENAI - DEPARTAMENTO REGIONAL DE SAO PAULO",
      unidade_sede: true,
      nome_sede: "SERVICO NACIONAL DE APRENDIZAGEM INDUSTRIAL",
      cnpj: "03774819000102",
      id_tipo_servico: "1",
      cep: "01311923",
      logradouro: "Avenida Paulista, 1313",
      bairro: "Bela Vista",
      estado: "SP",
      cidade: "São Paulo",
      numero: "2121",
      telefone: "31223321313",
      email: "lookthehorizon4@gmail.com",
      senha: "ABCabc123!",
      id: 1,
    },
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(token),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

const auth = async (data) => {
  return {
    user: {
      nome_unidade: "SENAI - DEPARTAMENTO REGIONAL DE SAO PAULO",
      unidade_sede: true,
      nome_sede: "SERVICO NACIONAL DE APRENDIZAGEM INDUSTRIAL",
      cnpj: "03774819000102",
      id_tipo_servico: "1",
      cep: "01311923",
      logradouro: "Avenida Paulista, 1313",
      bairro: "Bela Vista",
      estado: "SP",
      cidade: "São Paulo",
      numero: "2121",
      telefone: "31223321313",
      email: "lookthehorizon4@gmail.com",
      senha: "ABCabc123!",
      id: 1,
    },
    token: "12345678",
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((data) => {})
    .catch((err) => console.log(err));
};

const logout = async (data) => {
  return { status: true };
  fetch(url, {
    method: "POST",
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
};

export { validateToken, auth, logout };
