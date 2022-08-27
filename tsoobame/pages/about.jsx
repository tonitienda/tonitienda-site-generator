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
      <Typography variant="h5">LinkedIn</Typography>

      <div
        class="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="tonitienda"
        data-version="v1"
      />
    </Grid>
    <Grid item md={4}>
      <Typography variant="h5">Services</Typography>
    </Grid>
    <Grid item md={4}>
      <Typography variant="h5">Links</Typography>
    </Grid>
  </Grid>
);

export default About;
