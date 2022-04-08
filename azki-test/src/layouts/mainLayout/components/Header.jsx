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
            <AppBar color="transparent" position="relative" sx={{ boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src='icons/logo.svg' />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 500 }}>
                        {farsi.mainTitle}
                    </Typography>
                    <Button color="primary">{farsi.register}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
