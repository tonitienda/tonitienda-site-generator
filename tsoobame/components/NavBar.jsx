import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const pages = [
  {
    title: "Blog",
    url: "/blog",
  },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "Resources", url: "/recommended-resources" },
];

const ResponsiveAppBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {pages.map((page) => (
          <Button key={page} sx={{ color: "white" }}>
            <a
              key={page.url}
              href={page.url}
              color="inherit"
              style={{ color: "white", textDecoration: "none" }}
            >
              {page.title}
            </a>
          </Button>
        ))}
      </Box>
    </>
  );
};
export default ResponsiveAppBar;
