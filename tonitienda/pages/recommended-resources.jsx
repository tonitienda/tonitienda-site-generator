import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import Head from "next/head";

const References = () => (
  <>
    <Head>
      <title>Toni Tienda - Recursos recomendados </title>
    </Head>

    <Box>
      <Typography variant="h5">Algunos videos que me gusta ver:</Typography>
      {/* <Grid container alignItems="space-between" alignContent="space-between">
        <Grid item md={3} style={{ margin: 6 }}>
          <Card>
            <CardHeader title="Rich Hickey - Maybe not"></CardHeader>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Discusses about design principles and how do deal with
                nullability.
              </Typography>
              <iframe
                src="https://www.youtube.com/embed/YR5WdGrpoug"
                title="Rich Hickey - Maybe not"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} style={{ margin: 6 }}>
          <Card>
            <CardHeader title="Rich Hickey - Are we there yet?"></CardHeader>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Describes problem with time management in IT applications.
              </Typography>
              <iframe
                src="https://www.youtube.com/embed/ScEPu1cs4l0"
                title="Rich Hickey - Are we there yet?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} style={{ margin: 6 }}>
          <Card>
            <CardHeader title="Liz Rice - Containers from scratch"></CardHeader>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Using the components that are used to create containers via
                Golang. Very useful to understand some basic of how containers
                work under the hoods.
              </Typography>
              <iframe
                src="https://www.youtube.com/embed/8fi7uSYlOdc"
                title="Liz Rice - Containers from scratch"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
    </Box>
  </>
);

export default References;
