import React, { useState, Fragment } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import farsi from "src/dictionary/farsi";
import {
  SelectCar,
  SelectLastInsuranceCo,
  AddInsurancePercentage,
  InformationModal,
} from "./components";

const Insurance = () => {
  const [infoModal, setInfoModal] = useState(false);

  const [activeStep, setActiveStep] = useState("selectCar");

  const [form, setForm] = useState({
    carType: "",
    carModel: "",
    insuranceCompany: "",
    thirdPersonPercentage: "",
    incidentPercentage: "",
  });

  const {
    carType,
    carModel,
    insuranceCompany,
    thirdPersonPercentage,
    incidentPercentage,
  } = form;

  const closeModal = () => setInfoModal(false);

  const openModal = () => setInfoModal(true);

  const onChangeAutoComplete = (name) => (event, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "carType") {
      setForm((prevState) => ({
        ...prevState,
        carModel: "",
      }));
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case "selectCar":
        return (
          <SelectCar
            carType={carType}
            carModel={carModel}
            setActiveStep={setActiveStep}
            onChangeAutoComplete={onChangeAutoComplete}
          />
        );
      case "selectLastInsuranceCo":
        return (
          <SelectLastInsuranceCo
            setActiveStep={setActiveStep}
            onChangeAutoComplete={onChangeAutoComplete}
            insuranceCompany={insuranceCompany}
          />
        );
      case "addInsurancePercentage":
        return (
          <AddInsurancePercentage
            setActiveStep={setActiveStep}
            onChangeAutoComplete={onChangeAutoComplete}
            openModal={openModal}
            thirdPersonPercentage={thirdPersonPercentage}
            incidentPercentage={incidentPercentage}
          />
        );
      default:
        return (
          <SelectCar
            carType={carType}
            carModel={carModel}
            setActiveStep={setActiveStep}
            onChangeAutoComplete={onChangeAutoComplete}
          />
        );
    }
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
      <InformationModal open={infoModal} onClose={closeModal} form={form} />
    </Fragment>
  );
};

export default Insurance;
