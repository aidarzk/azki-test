const maxLength = (name, value, max) => {
  if (value?.length > max) {
    return `حداکثر تعداد کاراکتر باید ${max} باشد`;
  } else return null;
};

export default maxLength;
