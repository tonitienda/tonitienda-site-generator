import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { CardHeader, Chip } from "@mui/material";
import { Box } from "@mui/system";

const Attribution = ({ attribution }) => (
  <a
    href={attribution.url}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none", color: "gray" }}
  >
    <Typography variant="caption">Photo by {attribution.name}</Typography>
  </a>
);

export default function PostCard({ post }) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={post.title}
        height="140"
        image={post.thumbnail.url}
      />
      <Attribution attribution={post.thumbnail.attribution} />
      <CardHeader title={post.title}></CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
        <Box style={{ marginTop: 24 }}>
          {post.tags.map((t) => (
            <Link key={t} href={`/blog/tags/${t}`}>
              <Chip label={t} variant="outlined" />
            </Link>
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href={`/blog/${post.slug}`} passHref>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
