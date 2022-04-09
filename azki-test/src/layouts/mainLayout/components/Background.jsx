import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1, position: "relative" }} className="backgroundBox">
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
            height: [80, 80, "100vh"],
          }}
        ></Grid>
      </Grid>
      <img alt="car" className="mainImage" src="icons/car-green.svg" />
    </Box>
  );
};

export default Header;
