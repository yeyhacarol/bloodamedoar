import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_API_BLOOD;

export const post = (url, data) => {
  fetch(BASE_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.message) {
        toast.success(data.message);
        return;
      } else if (data.error) {
        toast.error(data.error);
        return;
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
