import { Grid } from "@mui/material";
import PostCard from "./PostCard";

export default function PostGrid({ posts, category }) {
  return (
    <Grid container direction="row" spacing={1}>
      {posts.map((post, index) => (
        <Grid item key={index} md={4} lg={3} sm={12}>
          <PostCard post={{ ...post }} category={category} />
        </Grid>
      ))}
    </Grid>
  );
}
