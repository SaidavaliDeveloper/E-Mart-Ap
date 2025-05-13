import React from "react";
import "./Tv.css"; // optional: for styling

const Tv = () => {
  const tvs = [
    {
      id: 1,
      name: "Samsung 55\" UHD Smart TV",
      price: 59999,
      description: "Crystal 4K resolution with HDR, voice assistant, and 3 HDMI ports",
      image: "https://via.placeholder.com/250x150?text=Samsung+TV",
    },
    {
      id: 2,
      name: "LG 50\" 4K Ultra HD",
      price: 49999,
      description: "4K Ultra HD, WebOS, and AI ThinQ support",
      image: "https://via.placeholder.com/250x150?text=LG+TV",
    },
    {
      id: 3,
      name: "Sony Bravia 65\"",
      price: 79999,
      description: "Sony’s advanced X-Reality PRO and Google TV integration",
      image: "https://via.placeholder.com/250x150?text=Sony+TV",
    },
  ];

  return (
    <div className="tv-container">
      <h2>Latest TVs</h2>
      <div className="tv-grid">
        {tvs.map((tv) => (
          <div className="tv-card" key={tv.id}>
            <img src={tv.image} alt={tv.name} />
            <h3>{tv.name}</h3>
            <p>{tv.description}</p>
            <p><strong>₹{tv.price.toLocaleString()}</strong></p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tv;
