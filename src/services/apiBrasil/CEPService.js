const BASE_URL = process.env.REACT_APP_API_BRASIL;

const CEPService = async (cep) => {
  const res = await fetch(BASE_URL + `cep/v2/${cep}`);

  return await res.json();
};

export default CEPService;
