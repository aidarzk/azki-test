import React, { useState, Fragment, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import farsi from "src/dictionary/farsi";
import {
  SelectCar,
  SelectLastInsuranceCo,
  AddInsurancePercentage,
} from "./components";

const Insurance = () => {
  const [activeStep, setActiveStep] = useState("selectCar");

  const getStepContent = (step) => {
    switch (step) {
      case "selectCar":
        return <SelectCar setActiveStep={setActiveStep} />;
      case "selectLastInsuranceCo":
        return <SelectLastInsuranceCo setActiveStep={setActiveStep} />;
      case "addInsurancePercentage":
        return <AddInsurancePercentage setActiveStep={setActiveStep} />;
      default:
        return <SelectCar setActiveStep={setActiveStep} />;
    }
  };
  console.log("activeStep", activeStep);
  const handleNext = () => {
    setActiveStep((prevState) => prevState + 1);
  };

  const handleBack = () => {
    setActiveStep((prevState) => prevState - 1);
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item xl={12}>
          <Typography
            sx={{
              marginBottom: 4,
              fontWeight: 500,
              textAlign: "left",
            }}
            variant="h4"
          >
            {farsi.thirdPersonInsurance}
          </Typography>
        </Grid>
        {getStepContent(activeStep)}
      </Grid>
    </Fragment>
  );
};

export default Insurance;
