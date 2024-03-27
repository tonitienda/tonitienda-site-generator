import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import fs from "fs";
import path from "path";
import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/SideBar";
import Grid from "@mui/material/Grid";
import kyudoPosts from "../../kyudo/posts";
import { useReadingTime } from "react-hook-reading-time";
import Head from "next/head";

export const getStaticPaths = async () => {
  const paths = kyudoPosts.map((post) => ({
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
  const markdown = fs.readFileSync(
    path.join("kyudo", "posts", filePath),
    "utf-8"
  );
  const post = kyudoPosts.find((p) => p.filePath === filePath);
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

const PostPage = ({ post }) => {
  const { text } = useReadingTime(post.markdown);
  return (
    <Box
      style={{
        width: "auto",
        padding: 12,
      }}
    >
      <Head>
        <title>Toni Tienda - {post.title}</title>
      </Head>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item sm={12} md={3} style={{ padding: 6 }}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={9}>
          <Image
            src={post.thumbnail.url}
            style={{
              height: 200,
              objectFit: "cover",
            }}
            width="100%"
            height="200"
          />
          <Typography variant="body1">⏱ {text}</Typography>
          <Box>
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

                p: (props) => (
                  <Typography
                    variant="body1"
                    {...props}
                    paragraph
                    wrap
                    style={{ textAlign: "justify" }}
                  />
                ),
                ul: (props) => <ul {...props} />,

                li: (props) => (
                  <li {...props}>
                    <Typography
                      variant="body1"
                      {...props}
                      paragraph
                      wrap
                      style={{ textAlign: "justify", marginBottom: 3 }}
                    />
                  </li>
                ),
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostPage;
