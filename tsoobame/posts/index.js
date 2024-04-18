import dataLoader from "./data-loader.json";
import graphqlSchema from "./graphql-schema-stitching.json";
import shapeVsOptionality from "./shape-vs-optionality.json";
import dockerRegistryMirror from "./docker-registry-mirror.json";
import functionCallCascading from "./function-call-cascading.json";
import talkThinkCode from "./talk-think-code.json";
import resumeDrivenDevelopment from "./resume-driven-development.json";

// TODO - Sort posts by date descending
export default [
  dataLoader,
  graphqlSchema,
  shapeVsOptionality,
  dockerRegistryMirror,
  functionCallCascading,
  talkThinkCode,
  resumeDrivenDevelopment,
]
  .map((post) => ({
    ...post,
    slug: post.filePath.split(".")[0],
  }))
  .sort((p1, p2) => (p1.date > p2.date ? -1 : 1));
