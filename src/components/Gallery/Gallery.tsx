import React, { FC, useState } from "react";

import "./Gallery.css";

import _paintings from "../../data/data.json";
import { Painting } from "../../types/Painting";
import PaintingCard from "../PaintingCard/PaintingCard";
import PaintingSlide from "../PaintingSlide/PaintingSlide";
import SlideFooter from "../SlideFooter/SlideFooter";
const paintings = _paintings as Painting[];

interface GalleryProps {
  isSlideshowActive: boolean;
  setIsSlideshowActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Gallery: FC<GalleryProps> = ({
  isSlideshowActive,
  setIsSlideshowActive,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const onCardClick = (index: React.SetStateAction<number>) => {
    window.scroll({ top: 0, behavior: "smooth" });
    setSlideIndex(index);
    setIsSlideshowActive(true);
  };

  return (
    <main>
      {!isSlideshowActive ? (
        <div className="galleryView">
          {paintings.map((painting, index) => {
            return (
              <div key={index} onClick={() => onCardClick(index)}>
                <PaintingCard painting={painting} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div className="detailView">
            <PaintingSlide painting={paintings[slideIndex]} />
          </div>
          <SlideFooter
            paintingName={paintings[slideIndex].name}
            paintingArtist={paintings[slideIndex].artist.name}
            slideCount={paintings.length}
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
