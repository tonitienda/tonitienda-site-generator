import fs from "fs";
import path from "path";
import PostCard from "../components/PostCard";
import PostGrid from "../components/PostGrid";
import { Grid } from "@mui/material";
import posts from "../posts";

export const getStaticProps = async () => {
  const postsWithMarkdown = posts.map((post) => ({
    ...post,
    markdown: fs.readFileSync(path.join("posts", post.filePath), "utf-8"),
  }));

  return {
    props: {
      posts: postsWithMarkdown,
    },
  };
};

export default function Home({ posts }) {
  return <PostGrid posts={posts} />;
}
