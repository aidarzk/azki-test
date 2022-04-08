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

const SelectCar = (props) => {
  const { setActiveStep } = props;

  const [form, setForm] = useState({
    values: {
      firstName: "",
      lastName: "",
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

  const handleNext = () => {
    setActiveStep("selectLastInsuranceCo");
  };

  const handleBack = () => {
    setActiveStep((prevState) => prevState - 1);
  };

  return (
    <Grid container spacing={3}>
      <Grid
        sx={{
          marginBottom: 2,
          textAlign: "left",
        }}
        item
        xl={12}
      >
        <Typography variant="p" color="gray">
          {farsi.selectThirdpersonAndIncidentInsurancePercentage}
        </Typography>
      </Grid>
      <Grid item xl={12}>
        <CustomTextField
          errors={errors?.firstName}
          onChange={onChange}
          label={farsi.thirdPersonPercentage}
          name="firstName"
          value={firstName}
        />
      </Grid>
      <Grid item xl={12}>
        <CustomTextField
          errors={errors?.lastName}
          onChange={onChange}
          label={farsi.incidentPercentage}
          name="lastName"
          value={lastName}
        />
      </Grid>

      <Grid display={"flex"} item xl={12}>
        <Button
          sx={{
            borderRadius: 15,
            px: 6,
            py: 1.5,
            ml: "auto",
            color: "white",
          }}
          variant="contained"
          onClick={handleBack}
        >
          {farsi.getPrice}
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectCar;
