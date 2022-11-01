const BASE_URL = process.env.REACT_APP_API_BLOOD;

const get = async (url) => {
  const res = await fetch(BASE_URL + `${url}`);

  return await res.json();
};

export default get;
