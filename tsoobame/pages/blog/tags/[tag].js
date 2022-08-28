import PostGrid from "../../../components/PostGrid";
import posts from "../../../posts";

export const getStaticPaths = async () => {
  const paths = posts
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
      posts: posts.filter((p) => p.tags.some((t) => t === tag)),
    },
  };
};

export default function PostTag({ posts }) {
  return <PostGrid posts={posts} />;
}
