import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_API_BLOOD;

export const exclude = (url, id) => {
  fetch(BASE_URL + `/${url}/${id}`, {
    method: "DELETE",
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
