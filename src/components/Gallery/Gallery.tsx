import React from "react";

import "./Gallery.css";

import _paintings from "../../data/data.json";
import { Painting } from "../../types/Painting";
import PaintingCard from "../../PaintingCard/PaintingCard";
const paintings = _paintings as Painting[];

const Gallery = () => {
  console.log(paintings);
  return (
    <main>
      {paintings.map((painting) => {
        return (
          <div key={painting.name}>
            <PaintingCard painting={painting} />
          </div>
        );
      })}
    </main>
  );
};

export default Gallery;
