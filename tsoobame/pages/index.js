import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import PostCard from "../components/PostCard";
import { Grid } from "@mui/material";
import posts from "../posts";

export const getStaticProps = async () => {
  const postsWithMarkdown = posts.map((post) => ({
    ...post,
    slug: post.filePath.split(".")[0],

    markdown: fs.readFileSync(path.join("posts", post.filePath), "utf-8"),
  }));

  return {
    props: {
      posts: postsWithMarkdown,
    },
  };
};

export default function Home({ posts }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {posts.map((post, index) => (
        <Grid item md={6} key={index}>
          <PostCard post={{ ...post }} />
        </Grid>
      ))}
    </Grid>
  );
}
