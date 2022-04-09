import React, { Fragment } from "react";

import { Grid } from "@mui/material";

import { Header, Background } from "./components";

const MainLayout = (props) => {
  return (
    <Fragment>
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
          }}
          item
          xl={12}
          xs={12}
        >
          <Header />
        </div>
        <div>
          <Grid container>
            <Grid
              sx={{
                p: {
                  xs: 5,
                  md: "auto",
                },
                pt: {
                  xs: 8,
                  md: 8,
                },
                pl: {
                  xs: "auto",
                  md: 10,
                },
              }}
              item
              xl={6}
              md={6}
              sm={12}
            >
              {props.children}
            </Grid>
            <Grid item xl={6} md={6} sm={12}>
              <Background />
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};

export default MainLayout;
