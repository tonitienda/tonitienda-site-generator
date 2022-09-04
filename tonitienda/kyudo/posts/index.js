import primerPost from "./primer-post.json";

export default [primerPost].map((post) => ({
  ...post,
  slug: post.filePath.split(".")[0],
}));
