const onlyFarsi = (value) => {
  const regex = /[a-zA-Z0-9]/.test(value);

  if (regex && value?.length > 0) {
    return "فقط از حروف فارسی استفاده کنید";
  } else return null;
};

export default onlyFarsi;
