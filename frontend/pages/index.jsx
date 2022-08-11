import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import blogPosts from "../data/blog-posts";
import Footer from "../components/Footer";

const useStyles = makeStyles({
  container: {
    minHeight: "80vh",
    marginTop: "10vh",
  },
});

const Index = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" className={classes.container}>
        <Box my={4} display="flex" justifyContent="center">
          <Typography variant="h4" component="h1" gutterBottom>
            Last posts
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
      </Container>
      <Footer title="My Blog" description="Hi there, this is my blog!" />
    </React.Fragment>
  );
};

export default Index;
