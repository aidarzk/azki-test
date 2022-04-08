import React, { useState, useEffect } from "react";

import farsi from "src/dictionary/farsi";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { validationRules } from "src/enums";
import { validation } from "src/functions";

import { CustomTextField } from "src/components";

const schema = {
  firstName: {
    rules: {
      [validationRules.isRequired]: true,
      [validationRules.onlyFarsi]: true,
    },
    name: farsi.firstName,
  },
  lastName: {
    rules: {
      [validationRules.isRequired]: true,
      [validationRules.onlyFarsi]: true,
    },
    name: farsi.lastName,
  },
  mobile: {
    rules: {
      [validationRules.isRequired]: true,
      [validationRules.mobileFormat]: true,
    },
    name: farsi.mobile,
  },
  password: {
    rules: {
      [validationRules.isRequired]: true,
      [validationRules.maxLength]: 10,
      [validationRules.minLength]: 4,
      [validationRules.passwordFormat]: true,
    },
    name: farsi.password,
  },
};

const Register = () => {
  const [form, setForm] = useState({
    values: {
      firstName: "",
      lastName: "",
      mobile: "",
      password: "",
    },
    errors: {},
  });

  const { firstName, password, lastName, mobile } = form?.values;
  const { errors } = form;

  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (errors[name]) {
      delete errors[name];
    }

    setForm((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validation(form, schema);
    if (Object.keys(validationErrors)?.length > 0) {
      setForm((prevState) => ({
        ...prevState,
        errors: validationErrors,
      }));
    }
  };
  console.log(form);

  return (
    <form onSubmit={handleRegister}>
      <Grid container spacing={3}>
        <Grid item xl={12}>
          <Typography
            sx={{
              marginBottom: 3,
              fontWeight: 500,
              textAlign: "left",
            }}
            variant="h4"
          >
            {farsi.register}
          </Typography>
        </Grid>
        <Grid item xl={6}>
          <CustomTextField
            errors={errors?.firstName}
            onChange={onChange}
            label={farsi.firstName}
            name="firstName"
            value={firstName}
          />
        </Grid>
        <Grid item xl={6}>
          <CustomTextField
            errors={errors?.lastName}
            onChange={onChange}
            label={farsi.lastName}
            name="lastName"
            value={lastName}
          />
        </Grid>
        <Grid item xl={12}>
          <CustomTextField
            errors={errors?.mobile}
            onChange={onChange}
            label={farsi.mobile}
            name="mobile"
            value={mobile}
          />
        </Grid>
        <Grid item xl={12}>
          <CustomTextField
            errors={errors?.password}
            onChange={onChange}
            label={farsi.password}
            name="password"
            value={password}
          />
        </Grid>
        <Grid display={"flex"} item xl={12}>
          <Button
            sx={{
              color: "white",
              borderRadius: 15,
              px: 6,
              py: 1.5,
              ml: "auto",
            }}
            variant="contained"
            type="submit"
          >
            {farsi.register}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Register;
