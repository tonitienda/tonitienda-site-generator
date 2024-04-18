import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
        image={`https://res.cloudinary.com/ddkok43g3/image/upload/w_600,f_auto,q_auto/v1711551544/${post.thumbnail.url}`}
      />
      <Attribution attribution={post.thumbnail.attribution} />
      <CardHeader title={post.title} subheader={post.date}></CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
        <Box style={{ marginTop: 24 }}>
          {post.tags.map((t) => (
            <a key={t} href={`/blog/tags/${t}.html`}>
              <Chip label={t} variant="outlined" />
            </a>
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <a href={`/blog/${post.slug}.html`} passHref>
          <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
}
