const minLength = (name, value, min) => {
  if (value?.length < min) {
    return `حداقل تعداد کاراکتر باید ${min} باشد`;
  } else return null;
};

export default minLength;
