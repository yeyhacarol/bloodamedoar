const CNPJService = async (cnpj) => {
  const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);

  return await res.json();
};

export default CNPJService;
