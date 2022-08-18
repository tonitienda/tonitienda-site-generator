import dataLoader from "./data-loader.json";
import graphqlSchema from "./graphql-schema-stitching.json";
import readingTime from "reading-time";

export default [dataLoader, graphqlSchema].map((post) => ({
  ...post,
  slug: post.filePath.split(".")[0],
}));
