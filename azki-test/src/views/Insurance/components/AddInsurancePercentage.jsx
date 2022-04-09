import React, { useState, useEffect } from "react";

import farsi from "src/dictionary/farsi";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { validationRules } from "src/enums";
import { validation } from "src/functions";

import { CustomAutocomplete } from "src/components";

import axios from "axios";

const SelectCar = (props) => {
  const {
    setActiveStep,
    thirdPersonPercentage,
    incidentPercentage,
    onChangeAutoComplete,
    openModal,
  } = props;

  const [thirdPersonPercentageList, setThirdPersonPercentageList] = useState(
    []
  );

  const [incidentPercentageList, setIncidentPercentageList] = useState([]);

  const getThirdDiscount = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://bimito.com/api/product/third/third-discounts",
      });
      console.log(response);
      if (response?.status === 200) {
        setThirdPersonPercentageList(response?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getDriverDiscount = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://bimito.com/api/product/third/driver-discounts",
      });
      console.log(response);
      if (response?.status === 200) {
        setIncidentPercentageList(response?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getThirdDiscount();
    getDriverDiscount();
  }, []);

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
        <CustomAutocomplete
          options={thirdPersonPercentageList}
          label={farsi.thirdPersonPercentage}
          onChange={onChangeAutoComplete}
          name="thirdPersonPercentage"
          value={thirdPersonPercentage}
        />
      </Grid>
      <Grid item xl={12}>
        <CustomAutocomplete
          options={incidentPercentageList}
          label={farsi.incidentPercentage}
          onChange={onChangeAutoComplete}
          name="incidentPercentage"
          value={incidentPercentage}
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
          onClick={openModal}
        >
          {farsi.getPrice}
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectCar;
