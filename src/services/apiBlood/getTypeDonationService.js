const getTypeDonation = async () => {
  const res = await fetch("http://localhost:5000/listarTipoServico");

  return await res.json();
};

export default getTypeDonation;
