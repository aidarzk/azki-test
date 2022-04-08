import React, { useState, useEffect, } from "react";



import farsi from "src/dictionary/farsi";
import { Button, Grid, TextField, Typography } from "@mui/material";

// import RegisterJss from './RegisterJss'

// const schema = {
//   telephone: {
//     rules: {
//       [validationRules.isRequired]: true,
//       [validationRules.numberFormat]: true,
//       [validationRules.exactLength]: 11,
//       [validationRules.telephone]: true,
//     },
//     name: farsi.telephone,
//   },
//   otp: {
//     rules: {
//       [validationRules.isRequired]: true,
//       [validationRules.numberFormat]: true,
//       [validationRules.exactLength]: 6,
//     },
//     name: farsi.oneTimePassword,
//   },
//   password: {
//     rules: {
//       [validationRules.isRequired]: true,
//       [validationRules.minLength]: 6,
//     },
//     name: farsi.password,
//   },
// };


const Register = () => {
  // const classes = RegisterJss();

  const [form, setForm] = useState({
    values: {
      firstName: '',
      lastName: '',
      mobile: "",
      password: "",
    },
    errors: {},
  });

  const { telephone, password, otp, userExists } = form?.values;
  const { errors } = form;



  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (errors[name]) {
      delete errors[name];
    }
    // if (schema[name]?.rules?.numberFormat) {
    //   value = value?.replace(
    //     /[a-zA-zآ-ی!@#$%^&*()-+=}{\]|\:;"'<,>.?\/\\~؟×÷`_-]/,
    //     ""
    //   );
    // }

    setForm((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };


  return (
    <Grid container>
      <Grid item xl={12}>
        <Typography>
          {farsi.register}
        </Typography>
      </Grid>
      <Grid item xl={6}>
        <TextField fullWidth id="outlined-basic" label={
          farsi.firstName
        } variant="outlined" />
      </Grid>
      <Grid item xl={6}>
        <TextField id="outlined-basic" label={
          farsi.lastName
        } variant="outlined" />
      </Grid>
      <Grid item xl={12}>
        <TextField id="outlined-basic" label={
          farsi.mobile
        } variant="outlined" />
      </Grid>
      <Grid item xl={12}>
        <TextField id="outlined-basic" label={
          farsi.password
        } variant="outlined" />
      </Grid>
      <Grid item xl={12}>
        <Button variant="contained">
          {farsi.register}
        </Button>
      </Grid>
    </Grid>

  );
};

export default Register;
