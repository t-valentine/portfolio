/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Illustrations.css";

const images = [
  {
    url: "https://picsum.photos/id/1018/1000/600/",
    alt: "mountains",
    date: "2019",
  },
  {
    url: "https://picsum.photos/id/1015/1000/600/",
    alt: "ocean",
    date: "2020",
  },
  {
    url: "https://picsum.photos/id/1019/1000/600/",
    alt: "clouds",
    date: "2021",
  },
  {
    url: "https://picsum.photos/id/1018/1000/600/",
    alt: "mountains",
    date: "2022",
  },
  {
    url: "https://picsum.photos/id/1015/1000/600/",
    alt: "ocean",
    date: "2023",
  },
  {
    url: "https://picsum.photos/id/1019/1000/600/",
    alt: "clouds",
    date: "2024",
  },
  {
    url: "https://picsum.photos/id/1018/1000/600/",
    alt: "mountains",
    date: "2019",
  },
  {
    url: "https://picsum.photos/id/1015/1000/600/",
    alt: "ocean",
    date: "2020",
  },
  {
    url: "https://picsum.photos/id/1019/1000/600/",
    alt: "clouds",
    date: "2021",
  },
  {
    url: "https://picsum.photos/id/1018/1000/600/",
    alt: "mountains",
    date: "2022",
  },
  {
    url: "https://picsum.photos/id/1015/1000/600/",
    alt: "ocean",
    date: "2023",
  },
  {
    url: "https://picsum.photos/id/1019/1000/600/",
    alt: "clouds",
    date: "2024",
  },
];
function Illustrations() {
  const [selectedImage, setSelectedImage] = useState(
    <div id="selectedImage">
      <img src={images[0].url} alt={images[0].alt} />
      <p>{images[0].date}</p>
    </div>
  );

  const listItems = images.map((image, i) => (
    <button
      onClick={() =>
        setSelectedImage(
          <div id="selectedImage">
            <img src={images[i].url} alt={images[i].alt} />
            <p>{images[i].date}</p>
          </div>
        )
      }
    >
      <img src={image.url} alt={image.alt} className="thumbnail-image" />
    </button>
  ));
  return (
    <div className="home-section illustration" id="illustrations">
      <h1>Illustrations</h1>
      {selectedImage}
      <div className="thumbnails">{listItems}</div>
    </div>
  );
}

export default Illustrations;
