import Head from "next/head";
import PostGrid from "../../../components/PostGrid";
import kyudoPosts from "../../../kyudo/posts";

export const getStaticPaths = async () => {
  const paths = kyudoPosts
    .flatMap((post) => post.tags)
    .filter((tag, index, self) => self.indexOf(tag) === index)
    .map((tag) => ({
      params: {
        tag,
      },
    }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { tag } }) => {
  return {
    props: {
      kyudoPosts: kyudoPosts.filter((p) => p.tags.some((t) => t === tag)),
      tag,
    },
  };
};

export default function PostTag({ kyudoPosts, tag }) {
  return (
    <>
      <Head>
        <title>Kyudo- Tags: {tag} </title>
      </Head>
      <PostGrid posts={kyudoPosts} category="kyudo" />
    </>
  );
}
