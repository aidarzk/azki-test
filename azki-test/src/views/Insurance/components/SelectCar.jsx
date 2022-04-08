import React, { useState, useEffect } from "react";

import farsi from "src/dictionary/farsi";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { validationRules } from "src/enums";
import { validation } from "src/functions";

import { CustomTextField, CustomAutocomplete } from "src/components";

import Autocomplete from "@mui/material/Autocomplete";

import axios from "axios";

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

  const [carTypeList, setCarTypeList] = useState([]);

  const [carModelList, setCarModelList] = useState([]);

  const [form, setForm] = useState({
    values: {
      carType: "",
      carModel: "",
    },
    errors: {},
  });

  const { carType, carModel } = form?.values;
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

  const getCarType = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://bimito.com/api/product/vehicle/models/third",
      });
      if (response?.status === 200) {
        const brands = response?.data?.find(
          (car) => car?.title === "سواری"
        )?.brands;
        setCarTypeList(brands);
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCarType();
  }, []);

  const onChangeAutoComplete = (name) => (event, value) => {
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
    if (value?.models?.length > 0) {
      setCarModelList(value?.models);
      setForm((prevState) => ({
        ...prevState,
        values: {
          ...prevState.values,
          carModel: "",
        },
      }));
    }
  };

  const handleNext = () => {
    setActiveStep("selectLastInsuranceCo");
  };

  const handleBack = () => {
    setActiveStep((prevState) => prevState - 1);
  };
  console.log("carTypeList", form);
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
          {farsi.selectTypeAndModelOfYourCar}
        </Typography>
      </Grid>
      <Grid item xl={6}>
        <CustomAutocomplete
          options={carTypeList}
          label={farsi.carType}
          onChange={onChangeAutoComplete}
          name="carType"
          errors={errors?.carType}
          value={carType}
        />
      </Grid>
      <Grid item xl={6}>
        <CustomAutocomplete
          options={carModelList}
          label={farsi.carModel}
          onChange={onChangeAutoComplete}
          name="carModel"
          errors={errors?.carModel}
          value={carModel}
        />
      </Grid>

      <Grid display={"flex"} item xl={12}>
        <Button
          sx={{
            borderRadius: 15,
            px: 6,
            py: 1.5,
            mr: "auto",
          }}
          variant="outlined"
          onClick={handleBack}
        >
          <img
            src="icons/arrow.svg"
            width={12}
            style={{
              marginLeft: 12,
              transform: "rotate(180deg)",
            }}
          />
          {farsi.back}
        </Button>
        <Button
          sx={{
            borderRadius: 15,
            px: 6,
            py: 1.5,
            ml: "auto",
          }}
          variant="outlined"
          onClick={handleNext}
          disabled={!carModel || !carType}
        >
          {farsi.next}
          <img
            src="icons/arrow.svg"
            width={12}
            style={{
              marginRight: 12,
            }}
          />
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectCar;
