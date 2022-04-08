import { validationRules } from "src/enums";
import {
  isRequired,
  maxLength,
  minLength,
  passwordFormat,
  onlyFarsi,
  mobileFormat,
} from "./validationMethodes";

const validation = (form, schema) => {
  const values = Object.keys(form.values);
  let errors = {};

  values?.map((item) => {
    const rules = schema[item]?.rules ? schema[item]?.rules : {};
    const name = schema[item]?.name;
    const value = form.values[item];
    let error = [];

    Object.keys(rules)?.forEach((rule) => {
      switch (rule) {
        case validationRules.isRequired:
          const required = isRequired(name, value);
          required && error.push(required);
          break;

        case validationRules.minLength:
          const min = minLength(name, value, rules.minLength);
          min && error.push(min);
          break;

        case validationRules.maxLength:
          const max = maxLength(name, value, rules.maxLength);
          max && error.push(max);
          break;

        case validationRules.mobileFormat:
          const phoneRegError = mobileFormat(value);
          phoneRegError && error.push(phoneRegError);
          break;

        case validationRules.passwordFormat:
          const emailRegError = passwordFormat(value);
          emailRegError && error.push(emailRegError);
          break;

        default:
          break;
      }
    });

    if (error?.length > 0) {
      errors[item] = error;
    }

    return null;
  });

  return errors;
};

export default validation;
