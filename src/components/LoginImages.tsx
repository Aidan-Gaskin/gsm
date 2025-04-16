import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function LoginImages() {
  return (
    <ImageList sx={{ width: "100vh", height: "80vh" }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} subtitle={item.author} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

//ToDo: Replace with random info from API calls as fake content
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Aidan: To Change wth API",
    author: "@Aidan: To Change wth API",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Aidan: To Change wth API",
    author: "@Aidan: To Change wth API",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Aidan: To Change wth API",
    author: "@Aidan: To Change wth API",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Aidan: To Change wth API",
    author: "@Aidan: To Change wth API",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Aidan: To Change wth API",
    author: "@Aidan: To Change wth API",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Aidan: To Change wth API",
    author: "@Aidan: To Change wth API",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Aidan: To Change wth API",
    author: "@Aidan: To Change wth API",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Aidan: To Change wth API",
    author: "@Aidan: To Change wth API",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Aidan: To Change wth API",
    author: "@Aidan: To Change wth API",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Aidan: To Change wth API basil",
    author: "@Aidan: To Change wth API",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Aidan: To Change wth API",
    author: "@Aidan: To Change wth API",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Aidan: To Change wth API",
    author: "@Aidan: To Change wth API",
    cols: 2,
  },
];
