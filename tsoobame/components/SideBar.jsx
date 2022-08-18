import { Typography } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import posts from "../posts";

export const getStaticProps = async ({ params: { slug } }) => {
  console.log(slug);
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
            <Link href={p.filePath.split(".")[0]}>
              <Typography variant="body1">{p.title}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
