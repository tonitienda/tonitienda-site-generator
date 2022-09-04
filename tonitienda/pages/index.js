import { Typography } from "@mui/material";
import fs from "fs";
import path from "path";
import PostGrid from "../components/PostGrid";
import kyudoPosts from "../kyudo/posts";

export const getStaticProps = async () => {
  const kyudoPostsWithMarkdown = kyudoPosts.map((post) => ({
    ...post,
    markdown: fs.readFileSync(
      path.join("kyudo", "posts", post.filePath),
      "utf-8"
    ),
  }));

  return {
    props: {
      kyudoPosts: kyudoPostsWithMarkdown,
    },
  };
};

export default function Home({ kyudoPosts }) {
  return (
    <>
      <Typography variant="h5">Kyudo</Typography>
      <PostGrid posts={kyudoPosts} category="kyudo" />
    </>
  );
}
