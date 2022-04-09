import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
          alt="car"
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
