const url = "http://localhost:5000/loginHemocentro";

const validateToken = async (token) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(token),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

const auth = async (data) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

const logout = async (data) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

export { validateToken, auth, logout };
