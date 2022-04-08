import React from "react";

import TextField from "@mui/material/TextField";

const CustomTextField = (props) => {
  const { label, name, onChange, errors, className, value } = props;

  return (
    <TextField
      className={className}
      id="outlined-basic"
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
      error={errors}
      helperText={errors?.map((err, index) => (
        <p
          style={{ margin: "4px 0", textAlign: "right", fontSize: 12 }}
          key={index}
        >
          {err}
        </p>
      ))}
    />
  );
};

export default CustomTextField;
