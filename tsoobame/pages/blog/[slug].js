import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Typography } from "@mui/material";
import Sidebar from "../../components/SideBar";
import Grid from "@mui/material/Grid";
import posts from "../../posts";
import { useReadingTime } from "react-hook-reading-time";
import Image from "next/image";

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
  const markdown = fs.readFileSync(path.join("posts", filePath), "utf-8");
  const post = posts.find((p) => p.filePath === filePath);
  const mdxSource = await serialize(markdown);
  return {
    props: {
      post: {
        ...post,
        slug,
        mdxSource,
        markdown,
      },
    },
  };
};

const PostPage = ({ post, sidebar }) => {
  const { text } = useReadingTime(post.markdown);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item md={3} style={{ padding: 6 }}>
        <Sidebar />
      </Grid>
      <Grid item md={9} style={{ padding: 6 }}>
        <img
          src={post.thumbnail.url}
          style={{
            with: "100%",
            height: 200,
            objectFit: "cover",
          }}
          width="100%"
          height="200"
        />
        <Typography variant="body1">⏱ {text}</Typography>
        <MDXRemote
          {...post.mdxSource}
          components={{
            h1: (props) => (
              <Typography
                variant="h3"
                {...props}
                gutterBottom
                style={{ marginTop: 24 }}
              />
            ),
            h2: (props) => (
              <Typography
                variant="h4"
                {...props}
                gutterBottom
                style={{ marginTop: 24 }}
              />
            ),
            h3: (props) => (
              <Typography
                variant="h5"
                {...props}
                gutterBottom
                style={{ marginTop: 24 }}
              />
            ),
            h4: (props) => (
              <Typography
                variant="h6"
                {...props}
                gutterBottom
                style={{ marginTop: 24 }}
              />
            ),
            h5: (props) => (
              <Typography
                variant="h7"
                {...props}
                gutterBottom
                style={{ marginTop: 24 }}
              />
            ),
            h6: (props) => (
              <Typography
                variant="h8"
                {...props}
                gutterBottom
                style={{ marginTop: 24 }}
              />
            ),

            p: (props) => <Typography variant="body1" {...props} />,
            Quote: (props) => (
              <Typography
                style={{
                  paddingLeft: 24,
                  fontSize: "1.2em",
                  margin: 24,
                  color: "#33%",
                  fontStyle: "italic",
                }}
              >
                {props.children}
              </Typography>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PostPage;
