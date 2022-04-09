import React, { useState, useEffect } from "react";

import farsi from "src/dictionary/farsi";
import { Button, Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { CustomAutocomplete } from "src/components";

import axios from "axios";

const SelectCar = (props) => {
  const { setActiveStep, insuranceCompany, onChangeAutoComplete } = props;

  const [insuranceCompanyList, setinsuranceCompanyList] = useState([]);

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

  const handleNext = () => {
    setActiveStep("addInsurancePercentage");
  };

  const handleBack = () => {
    setActiveStep("selectCar");
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
        xs={12}
      >
        <Typography variant="p" color="gray">
          {farsi.selectYourLastInsuranceCompany}
        </Typography>
      </Grid>
      <Grid item xl={12} xs={12}>
        <CustomAutocomplete
          options={insuranceCompanyList}
          label={farsi.lastInsuranceCompany}
          onChange={onChangeAutoComplete}
          name="insuranceCompany"
          value={insuranceCompany}
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
          disabled={!insuranceCompany}
        >
          {farsi.next}
          <ArrowBackIosIcon fontSize="14" />
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectCar;
