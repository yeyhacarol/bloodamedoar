const BASE_URL = process.env.REACT_APP_API_BLOOD;

const validateToken = async (token) => {
  return await fetch(BASE_URL + "/loginHemocentro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(token),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.error(err));
};

const login = async (data) => {
  return await fetch(BASE_URL + "/loginHemocentro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);

      return data;
    })
    .catch((err) => console.error(err));
};

const logout = async () => {
  return { status: true };
};

export { validateToken, login, logout };
