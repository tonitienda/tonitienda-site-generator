const fs = require("fs");
const path = require("path");

const META = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;
const DIR = path.join(process.cwd(), "./pages/software/");
const files = fs.readdirSync(DIR).filter((file) => file.endsWith(".mdx"));

const readAllPosts = () => {
  console.log("files:", files);
  return files
    .map((file) => {
      console.log("file:", file);
      const name = path.join(DIR, file);
      const contents = fs.readFileSync(name, "utf8");
      const match = META.exec(contents);

      if (!match || typeof match[1] !== "string")
        throw new Error(`${name} needs to export const meta = {}`);

      const meta = eval("(" + match[1] + ")");

      return {
        ...meta,
        path: "/software/" + file.replace(/\.mdx?$/, ""),
      };
    })
    .filter((meta) => meta.published)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

const posts = readAllPosts();

export default posts;
