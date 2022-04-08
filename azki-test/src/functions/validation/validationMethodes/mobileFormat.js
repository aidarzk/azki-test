const telephoneRegex = (value) => {
  const regex = /^09/.test(value);
  if (!regex && value?.length > 0) {
    return "فرمت تلفن همراه وارد شده صحیح نمیباشد.";
  } else return null;
};

export default telephoneRegex;
