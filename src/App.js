import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  // Fetch cat images from the API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.thecatapi.com/v1/images/search?limit=9"
        );
        setImages(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, []);

  // Function to randomize the order of images
  const randomizeImages = () => {
    const randomizedImages = [...images].sort(() => Math.random() - 0.5);
    setImages(randomizedImages);
  };

  return (
    <div className="App">
      <h1 className="title">Cat Gallery</h1>
      <button className="randomize-btn" onClick={randomizeImages}>
        Randomize Images
      </button>
      <div className="image-gallery">
        {images.map((image) => (
          <img key={image.id} src={image.url} alt="Cat" className="image" />
        ))}
      </div>
    </div>
  );
}

export default App;
