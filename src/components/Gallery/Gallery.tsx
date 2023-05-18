import React, { FC } from "react";

import "./Gallery.css";

import _paintings from "../../data/data.json";
import { Painting } from "../../types/Painting";
import PaintingCard from "../PaintingCard/PaintingCard";
import PaintingSlide from "../PaintingSlide/PaintingSlide";
const paintings = _paintings as Painting[];

interface GalleryProps {
  isSlideshowActive: boolean;
}

const Gallery: FC<GalleryProps> = ({ isSlideshowActive }) => {
  console.log(paintings);
  return (
    <main>
      {paintings.map((painting) => {
        return (
          <div key={painting.name}>
            {!isSlideshowActive ? (
              <PaintingCard painting={painting} />
            ) : (
              <div>
                <PaintingSlide painting={painting} />
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
};

export default Gallery;
