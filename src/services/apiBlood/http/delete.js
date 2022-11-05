const BASE_URL = process.env.REACT_APP_API_BLOOD;

const exclude = (url, id, data) => {
  fetch(BASE_URL + `/${url}/${id}`, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.message) {
        toast.success(data.message);
      } else if (data.error) {
        toast.error(data.error);
      }
    })
    .catch((err) => console.error(err));
};
