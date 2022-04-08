import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import farsi from "src/dictionary/farsi";


const Header = (props) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* <div style={{
                backgroundColor
            }}></div> */}
            <img width={500} style={{
                position: 'absolute',
                bottom: 10,
                left: 10,
            }} src='icons/car-green.svg' />
        </Box>
    );
};

export default Header;
