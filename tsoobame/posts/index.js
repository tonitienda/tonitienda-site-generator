import dataLoader from "./data-loader.json";
import graphqlSchema from "./graphql-schema-stitching.json";
import shapeVsOptionality from "./shape-vs-optionality.json";
import dockerRegistryMirror from "./docker-registry-mirror.json";
import functionCallCascading from "./function-call-cascading.json";
import talkThinkCode from "./talk-think-code.json";

export default [
  dataLoader,
  graphqlSchema,
  shapeVsOptionality,
  dockerRegistryMirror,
  functionCallCascading,
  talkThinkCode,
].map((post) => ({
  ...post,
  slug: post.filePath.split(".")[0],
}));
