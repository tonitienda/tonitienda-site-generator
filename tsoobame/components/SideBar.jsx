import { Typography } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
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
              <Link href={`/blog/${p.slug}`} passHref>
                <a style={{ textDecoration: "none", color: "gray" }}>
                  {p.title}
                </a>
              </Link>
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
