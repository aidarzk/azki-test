import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import farsi from "src/dictionary/farsi";
import { Grid } from "@mui/material";

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}></Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            backgroundColor: "#fef7dd",
            height: "calc(100vh - 64px)",
          }}
        ></Grid>
        <img
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            maxWidth: 750,
          }}
          src="icons/car-green.svg"
        />
      </Grid>
      {/* <div style={{
                backgroundColor
            }}></div> */}
    </Box>
  );
};

export default Header;
