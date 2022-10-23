const capitalize = (option) => {
  let splitOption = option.toLowerCase().split(" ");

  for (let i = 0; i < splitOption.length; i++) {
    splitOption[i] =
      splitOption[i].charAt(0).toUpperCase() + splitOption[i].substring(1);
  }

  return splitOption.join(" ");
};

export { capitalize };
