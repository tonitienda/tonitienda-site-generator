import { Grid, Typography } from "@mui/material";

const About = () => (
  <Grid container alignItems="space-between" alignContent="space-between">
    <Grid item md={6}>
      <Typography variant="h4">Services</Typography>
    </Grid>
    <Grid item md={6}>
      <Typography variant="h4">Links</Typography>
    </Grid>
  </Grid>
);

export default About;
