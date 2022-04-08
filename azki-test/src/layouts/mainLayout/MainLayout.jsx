import React, { Fragment } from "react";

import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

import { Header, Background } from "./components";
import { Grid } from "@mui/material";



const MainLayout = (props) => {
    return (
        <Fragment>
            <Grid container>
                <Grid item xl={12}>
                    <Header />
                </Grid>
                <Grid sx={{
                    paddingLeft: 10
                }} item xl={6}>
                    {props.children}
                </Grid>
                <Grid item xl={6}>
                    <Background />
                </Grid>
            </Grid>


        </Fragment>
    );
};

export default MainLayout;
