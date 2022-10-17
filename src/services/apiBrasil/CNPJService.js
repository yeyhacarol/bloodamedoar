const BASE_URL = process.env.REACT_APP_API_BRASIL;

const CNPJService = async (cnpj) => {
  const res = await fetch(BASE_URL + `/cnpj/v1/${cnpj}`);

  return await res.json();
};

export default CNPJService;
