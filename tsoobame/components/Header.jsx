import React from "react";
import { Typography, Toolbar, AppBar } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
    },
    toolbarTitle: {},
    toolbarSecondary: {
      justifyContent: "space-between",
      overflowX: "auto",
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    appBar: {
      width: "100%",
      top: 0,
      left: 0,
      right: 0,
      position: "fixed",
      zIndex: 1,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar} style={{ padding: 0 }}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <a
            color="inherit"
            href="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            tsoobame
          </a>
        </Typography>
        <NavBar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
