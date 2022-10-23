const BASE_URL = process.env.REACT_APP_BASE_URL;

const getById = async (url, id) => {
  const res = await fetch(BASE_URL + `${url}/${id}`);

  return await res.json();
};

export default getById;
