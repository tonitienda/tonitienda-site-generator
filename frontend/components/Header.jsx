import React from "react";
import { Typography, Button, Toolbar, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: `linear-gradient(90deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.dark})`,
    top: 0,
    width: "100%",
    position: "fixed",
  },
  toolbarTitle: {
    flex: 1,
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
}));

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
            Tsoobame
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
