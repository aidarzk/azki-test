import React, { useState, useEffect } from "react";

import farsi from "src/dictionary/farsi";
import { Button, Grid, TextField, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { validationRules } from "src/enums";
import { validation } from "src/functions";

import { CustomAutocomplete } from "src/components";

import Autocomplete from "@mui/material/Autocomplete";

import axios from "axios";

const SelectCar = (props) => {
  const { setActiveStep, carType, carModel, onChangeAutoComplete } = props;

  const [carTypeList, setCarTypeList] = useState([]);

  const [carModelList, setCarModelList] = useState([]);

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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCarType();
  }, []);

  useEffect(() => {
    if (carType) {
      setCarModelList(carType?.models);
    }
  }, [carType]);

  const handleNext = () => {
    setActiveStep("selectLastInsuranceCo");
  };

  const handleBack = () => {
    setActiveStep();
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
          {farsi.selectTypeAndModelOfYourCar}
        </Typography>
      </Grid>
      <Grid item xl={6}>
        <CustomAutocomplete
          options={carTypeList}
          label={farsi.carType}
          onChange={onChangeAutoComplete}
          name="carType"
          value={carType}
        />
      </Grid>
      <Grid item xl={6}>
        <CustomAutocomplete
          options={carModelList}
          label={farsi.carModel}
          onChange={onChangeAutoComplete}
          name="carModel"
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
          <ArrowBackIosIcon
            fontSize="14"
            sx={{
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
          <ArrowBackIosIcon fontSize="14" />
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectCar;
