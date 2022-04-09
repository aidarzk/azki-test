import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

import { useSelector } from "react-redux";

import farsi from "src/dictionary/farsi";

const Header = (props) => {
  const register = useSelector((store) => store.register);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="transparent"
        position="relative"
        sx={{ boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img alt="logo" src="icons/logo.svg" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 500,
              visibility: ["hidden", "hidden", "visible"],
            }}
          >
            {farsi.mainTitle}
          </Typography>
          <Link href="/" color="black" underline="none">
            {register?.registeredSuccessfully
              ? `${register?.userInformation?.firstName} ${register?.userInformation?.lastName}`
              : farsi.register}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
