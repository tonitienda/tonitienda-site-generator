import React from "react";
import { Typography, Toolbar, AppBar } from "@mui/material";
import Link from "./Link";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      borderBottom: `1px solid`,
      background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
      top: 0,
      width: "100%",
      position: "fixed",
    },
    toolbarTitle: {
      flex: 1,
      a: {
        textDecoration: "none",
      },
    },
    toolbarSecondary: {
      justifyContent: "space-between",
      overflowX: "auto",
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    appBar: {},
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link color="inherit" href="/">
            tonitienda
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
