import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Typography } from "@mui/material";
import Sidebar from "../../components/SideBar";
import Grid from "@mui/material/Grid";
import posts from "../../posts";

export const getStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: {
      slug: post.filePath.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const filePath = slug + ".mdx";
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", filePath),
    "utf-8"
  );
  const post = posts.find((p) => p.filePath === filePath);
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      post: {
        ...post,
        slug,
        mdxSource,
      },
    },
  };
};

const PostPage = ({ post }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item md={3}>
        <Sidebar />
      </Grid>
      <Grid item md={9}>
        <MDXRemote
          {...post.mdxSource}
          components={{
            h1: (props) => <Typography variant="h3" {...props} gutterBottom />,
            h2: (props) => <Typography variant="h4" {...props} gutterBottom />,
            h3: (props) => <Typography variant="h5" {...props} gutterBottom />,
            h4: (props) => <Typography variant="h6" {...props} gutterBottom />,
            h5: (props) => <Typography variant="h7" {...props} gutterBottom />,
            h6: (props) => <Typography variant="h8" {...props} gutterBottom />,

            p: (props) => (
              <Typography variant="body1" {...props} gutterBottom />
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PostPage;
