import fs from "fs";
import path from "path";
import posts from "../../posts";
import PostGrid from "../../components/PostGrid";

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

export default function Posts({ posts }) {
  return <PostGrid posts={posts} />;
}
