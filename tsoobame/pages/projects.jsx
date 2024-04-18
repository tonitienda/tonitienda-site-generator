import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Head from "next/head";

const Attribution = ({ attribution }) => (
  <a
    href={attribution.url}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none", color: "gray" }}
  >
    <Typography variant="caption">Photo by {attribution.name}</Typography>
  </a>
);

const Projects = () => (
  <>
    <Head>
      <title>Tsoobame - Projects </title>
    </Head>

    <Grid container alignItems="space-between" alignContent="space-between">
      <Grid item md={4} style={{ margin: 6 }}>
        <Card>
          <CardMedia
            component="img"
            alt={"Kadai"}
            height="140"
            image={`https://res.cloudinary.com/ddkok43g3/image/upload/w_600,f_auto,q_auto/v1711551544/kadai.jpg`}
          />
          <Attribution
            attribution={{
              name: "Estée Janssens",
              url: "https://unsplash.com/@esteejanssens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            }}
          />

          <CardHeader title="Kadai"></CardHeader>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Application to manage tasks aimed to play with different
              technologies and patters.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href={"/tags/kadai.html"}>
                <Button size="small"> See articles</Button>
              </a>
            </Button>
            <a
              href={"https://github.com/tonitienda/kadai"}
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">Visit Repo</Button>
            </a>
          </CardActions>
        </Card>
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
