import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";

const pages = [
  {
    title: "Blog",
    url: "/blog",
  },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "References", url: "/references" },
];

const ResponsiveAppBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
            <Link
              key={page.url}
              href={page.url}
              color="inherit"
              style={{ color: "white" }}
            >
              <a style={{ color: "white", textDecoration: "none" }}>
                {page.title}
              </a>
            </Link>
          </Button>
        ))}
      </Box>
    </>
  );
};
export default ResponsiveAppBar;
