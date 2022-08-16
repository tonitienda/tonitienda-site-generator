import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Typography } from "@mui/material";

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

const PostPage = ({ frontMatter: { title }, mdxSource }) => {
  return (
    <>
      <MDXRemote
        {...mdxSource}
        components={{
          h1: (props) => <Typography variant="h3" {...props} gutterBottom />,
          h2: (props) => <Typography variant="h4" {...props} gutterBottom />,
          h3: (props) => <Typography variant="h5" {...props} gutterBottom />,
          h4: (props) => <Typography variant="h6" {...props} gutterBottom />,
          h5: (props) => <Typography variant="h7" {...props} gutterBottom />,
          h6: (props) => <Typography variant="h8" {...props} gutterBottom />,

          p: (props) => <Typography variant="body1" {...props} gutterBottom />,
        }}
      />
    </>
  );
};

export default PostPage;
