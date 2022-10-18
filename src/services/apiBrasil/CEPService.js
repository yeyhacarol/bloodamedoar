const BASE_URL = process.env.REACT_APP_API_BRASIL;

const CEPService = async (cep) => {
  const res = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);

  return await res.json();
};

export default CEPService;
