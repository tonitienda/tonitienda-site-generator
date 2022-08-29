import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography color="inherit" variant="body2" align="center">
      {"Copyright © "}
      tonitienda {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
    color: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
    width: "100%",
    zIndex: 99,
    position: "relative",
    bottom: 0,
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </footer>
  );
}
