const BASE_URL = process.env.REACT_APP_API_BLOOD;

export const get = async (url) => {
  const res = await fetch(BASE_URL + `${url}`);

  return await res.json();
};

export const getById = async (url, id) => {
  const res = await fetch(BASE_URL + `${url}/${id}`);

  return await res.json();
};
