import { Typography } from "@mui/material";
import posts from "../posts";

export const getStaticProps = async ({ params: { slug } }) => {
  return {
    props: {
      slug,
    },
  };
};

const SideBar = ({ slug }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Posts {slug}
      </Typography>
      <ul style={{ listStyleType: "none" }}>
        {posts.map((p, index) => (
          <li key={index}>
            <Typography variant="body1">
              <a
                href={`/blog/${p.slug}.html`}
                style={{ textDecoration: "none", color: "gray" }}
              >
                {p.title}
              </a>
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
