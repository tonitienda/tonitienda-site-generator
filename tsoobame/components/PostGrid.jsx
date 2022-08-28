import { Grid } from "@mui/material";
import PostCard from "./PostCard";

export default function PostGrid({ posts }) {
  return (
    <Grid container direction="row">
      {posts.map((post, index) => (
        <Grid item key={index} style={{ margin: 6 }}>
          <PostCard post={{ ...post }} />
        </Grid>
      ))}
    </Grid>
  );
}
