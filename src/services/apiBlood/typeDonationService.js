const BASE_URL = process.env.REACT_APP_BASE_URL;

const getTypeDonation = async () => {
  const res = await fetch(BASE_URL + "/listarTipoServico");

  return await res.json();
};

export default getTypeDonation;
