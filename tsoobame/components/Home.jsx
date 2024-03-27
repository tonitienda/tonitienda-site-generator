import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  return (
    <div className="mt-5">
      {posts.map((post, index) => (
        <a href={"/blog/" + post.slug + ".html"} passHref key={index}>
          <div className="card mb-3 pointer" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{post.frontMatter.title}</h5>
                  <p className="card-text">{post.frontMatter.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {post.frontMatter.date}
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-4 m-auto">
                <img
                  src={`https://res.cloudinary.com/ddkok43g3/image/upload/t_Thumbnail/v1711551544/${post.thumbnail.url}`}
                  alt={post.title}
                />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
