import React, { useState, useEffect } from "react";

import farsi from "src/dictionary/farsi";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { validationRules } from "src/enums";
import { validation } from "src/functions";

import { CustomAutocomplete } from "src/components";

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

  const [insuranceCompanyList, setinsuranceCompanyList] = useState([]);

  const [form, setForm] = useState({
    values: {
      insuranceCompany: "",
    },
    errors: {},
  });

  const { insuranceCompany } = form?.values;
  const { errors } = form;

  const getInsureCompanies = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://bimito.com/api/product/third/companies",
      });
      console.log(response);
      if (response?.status === 200) {
        setinsuranceCompanyList(response?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInsureCompanies();
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
  };

  const handleNext = () => {
    setActiveStep("addInsurancePercentage");
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
          {farsi.selectYourLastInsuranceCompany}
        </Typography>
      </Grid>
      <Grid item xl={12}>
        <CustomAutocomplete
          options={insuranceCompanyList}
          label={farsi.lastInsuranceCompany}
          onChange={onChangeAutoComplete}
          name="insuranceCompany"
          errors={errors?.insuranceCompany}
          value={insuranceCompany}
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
          disabled={!insuranceCompany}
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
