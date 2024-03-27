import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import Head from "next/head";

const Projects = () => (
  <>
    <Head>
      <title>Toni Tienda - Projects </title>
    </Head>

    <Grid container alignItems="space-between" alignContent="space-between">
      <Grid item md={4} style={{ margin: 6 }}>
        <Card>
          <CardHeader title="Cinc Estrelles"></CardHeader>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Fictitious project themed in a hotel management system. Used to
              keep in touch with Web based EDA architectures, learn technologies
              and patterns and showcase them in articles.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href={"/tags/cinc-estrelles.html"}>
                <Button size="small"> See articles</Button>
              </a>
            </Button>
            <a
              href={"https://github.com/tonitienda/cinc-estrelles"}
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">Visit</Button>
            </a>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </>
);

export default Projects;
