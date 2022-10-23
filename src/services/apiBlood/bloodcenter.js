const BASE_URL = process.env.REACT_APP_BASE_URL;

const bloodcenter = async (id) => {
  const res = await fetch(BASE_URL + `/cadastrarHemocentro/${id}`);

  return await res.json();
};

export default bloodcenter;
