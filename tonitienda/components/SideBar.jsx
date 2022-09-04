import { Typography } from "@mui/material";
import Link from "next/link";

import kyudoPosts from "../kyudo/posts";

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
        Kyudo
      </Typography>
      <ul style={{ listStyleType: "none" }}>
        {kyudoPosts.map((p, index) => (
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
