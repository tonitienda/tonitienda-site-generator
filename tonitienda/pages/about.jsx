import { Grid, Typography } from "@mui/material";

const About = () => (
  <Grid container alignItems="space-between" alignContent="space-between">
    <script
      src="https://platform.linkedin.com/badges/js/profile.js"
      async
      defer
      type="text/javascript"
    ></script>
    <Grid item md={4}>
      <Typography variant="h5">Kyudo</Typography>
      <Typography variant="body2">
        Empecé a practicar Kyudo en Barcelona (España) en 2011. En 2016 me mudé
        a Tokyo donde estoy continuando mi practica. Actualmente soy 2 Dan
        preparandome para el examen de 3o.
      </Typography>
    </Grid>
    <Grid item md={4}>
      <Typography variant="h5">Software</Typography>
      <Typography variant="body2">
        Llevo trabajando en el mundo del Software desde 2003. Tengo un blog
        independiente sobre Software y otros temas a su alrededor. Puedes
        visitarlo{" "}
        <a href="https://tsoobame.github.io/" target="__blank">
          aqui
        </a>
        .
      </Typography>
    </Grid>
  </Grid>
);

export default About;
