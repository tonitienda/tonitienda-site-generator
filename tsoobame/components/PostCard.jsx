import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { CardHeader } from "@mui/material";

export default function PostCard({ post }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={post.title}
        height="140"
        image={post.thumbnailUrl}
      />
      <CardHeader title={post.title}></CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href={"/blog/" + post.slug} passHref>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
