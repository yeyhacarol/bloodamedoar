const CEPService = async (cep) => {
  const res = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);

  return await res.json();
};

export default CEPService;
