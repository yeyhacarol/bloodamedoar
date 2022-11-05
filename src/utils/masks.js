const phoneMask = (phoneNumber) => {
  let number = phoneNumber.replace(/\D/g, "");

  number = number.replace(/^0/, "");

  if (number.length > 10) {
    number = number.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (number.length > 5) {
    number = number.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (number.length > 2) {
    number = number.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    number = number.replace(/^(\d*)/, "($1");
  }

  return number;
};

const cepMask = (cep) => {
  return cep.replace(/^(\d{5})(\d)/, "$1-$2");
};

const dateMask = (data) => {
  let date = new Date(data);
  let newData = date.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  return newData;
};

export { phoneMask, cepMask, dateMask };
