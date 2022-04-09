import React from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import farsi from "src/dictionary/farsi";

const CustomAutocomplete = (props) => {
  const { label, name, onChange, errors, value, options } = props;

  return (
    <Autocomplete
      fullWidth
      disablePortal
      id="combo-box-demo"
      disableClearable
      options={options}
      name={name}
      value={value ? value : null}
      onChange={onChange(name)}
      getOptionLabel={(option) => option.title}
      noOptionsText={farsi.doesntExist}
      renderInput={(params) => (
        <TextField
          fullWidth
          {...params}
          label={label}
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
      )}
    />
  );
};

export default CustomAutocomplete;
