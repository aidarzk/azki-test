const isRequired = (name, value) => {
  if (!value) {
    return `وارد کردن ${name} اجباری است `;
  } else return null;
};

export default isRequired;
