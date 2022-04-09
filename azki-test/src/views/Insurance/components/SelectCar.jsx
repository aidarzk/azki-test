import React, { useState, useEffect } from "react";

import farsi from "src/dictionary/farsi";
import { Button, Grid, Typography, Link } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { CustomAutocomplete } from "src/components";

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

  return (
    <Grid container spacing={3}>
      <Grid
        sx={{
          marginBottom: 2,
          textAlign: "left",
          pr: "auto",
        }}
        item
        xl={12}
        xs={12}
      >
        <Typography variant="p" color="gray">
          {farsi.selectTypeAndModelOfYourCar}
        </Typography>
      </Grid>
      <Grid item xl={6} md={6} sm={12} xs={12}>
        <CustomAutocomplete
          options={carTypeList}
          label={farsi.carType}
          onChange={onChangeAutoComplete}
          name="carType"
          value={carType}
        />
      </Grid>
      <Grid item xl={6} md={6} sm={12} xs={12}>
        <CustomAutocomplete
          options={carModelList}
          label={farsi.carModel}
          onChange={onChangeAutoComplete}
          name="carModel"
          value={carModel}
        />
      </Grid>

      <Grid
        display="flex"
        justifyContent="space-between"
        width="100%"
        item
        xl={12}
        xs={12}
      >
        <Button
          sx={{
            borderRadius: 15,
            px: 6,
            py: 1.5,
            mr: "auto",
          }}
          variant="outlined"
        >
          <Link display="flex" alignItems="center" href="/" underline="none">
            <ArrowBackIosIcon
              fontSize="14"
              sx={{
                transform: "rotate(180deg)",
              }}
            />
            {farsi.back}
          </Link>
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
