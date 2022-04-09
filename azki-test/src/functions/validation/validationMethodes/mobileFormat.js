const telephoneRegex = (value) => {
  const regex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/.test(value);
  if (!regex && value?.length > 0) {
    return "فرمت تلفن همراه وارد شده صحیح نمیباشد.";
  } else return null;
};

export default telephoneRegex;
