import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import farsi from "src/dictionary/farsi";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { validationRules } from "src/enums";
import { validation } from "src/functions";

import { CustomTextField } from "src/components";

import { useDispatch } from "react-redux";
import { register } from "src/actions";

import axios, { AxiosRequestConfig } from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

const axiosMockInstance = axios.create();
const mock = new AxiosMockAdapter(axiosMockInstance, { delayResponse: 0 });

mock.onPost("/register").reply(200, {
  message: "user registered successfully",
});

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const postUser = async () => {
    try {
      const response = await axiosMockInstance({
        method: "post",
        url: "/register",
        data: form,
      });

      if (response?.status === 200) {
        dispatch(
          register({
            registeredSuccessfully: true,
            userInformation: form?.values,
          })
        );
        navigate("insurance");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validation(form, schema);
    if (Object.keys(validationErrors)?.length > 0) {
      setForm((prevState) => ({
        ...prevState,
        errors: validationErrors,
      }));
    } else {
      postUser();
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <Grid container spacing={3}>
        <Grid item xl={12} xs={12}>
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
        <Grid item xl={6} md={6} sm={12} xs={12}>
          <CustomTextField
            errors={errors?.firstName}
            onChange={onChange}
            label={farsi.firstName}
            name="firstName"
            value={firstName}
          />
        </Grid>
        <Grid item xl={6} md={6} sm={12} xs={12}>
          <CustomTextField
            errors={errors?.lastName}
            onChange={onChange}
            label={farsi.lastName}
            name="lastName"
            value={lastName}
          />
        </Grid>
        <Grid item xl={12} xs={12}>
          <CustomTextField
            errors={errors?.mobile}
            onChange={onChange}
            label={farsi.mobile}
            name="mobile"
            value={mobile}
          />
        </Grid>
        <Grid item xl={12} xs={12}>
          <CustomTextField
            errors={errors?.password}
            onChange={onChange}
            label={farsi.password}
            name="password"
            value={password}
            type="password"
          />
        </Grid>
        <Grid display="flex" item xl={12} xs={12}>
          <Button
            sx={{
              color: "white",
              borderRadius: 15,
              px: 6,
              py: 1.5,
              ml: ["auto", "auto", "auto"],
              mr: ["auto", "auto", 0],
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
