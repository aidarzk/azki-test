const passwordFormat = (value) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  if (!regex && value?.length > 0) {
    return "رمز عبور باید از حداقل یک عدد حداقل یک حرف لاتین بزرگ و حداقل یک حرف لاتین کوچک تشکیل شده باشد";
  } else return null;
};

export default passwordFormat;
