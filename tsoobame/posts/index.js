import dataLoader from "./data-loader.json";
import graphqlSchema from "./graphql-schema-stitching.json";
import shapeVsOptionality from "./shape-vs-optionality.json";

export default [dataLoader, graphqlSchema, shapeVsOptionality].map((post) => ({
  ...post,
  slug: post.filePath.split(".")[0],
}));
