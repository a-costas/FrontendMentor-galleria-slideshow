import { FC, useState } from "react";

import "./PaintingSlide.css";
import { PaintingProps } from "../../types/Painting";
import PaintingModal from "../PaintingModal/PaintingModal";

const PaintingSlide: FC<PaintingProps> = ({ painting }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="paintingSlide">
      <div className="imageSection">
        <img src={`${painting.images.hero.small}`} alt={painting.name} />
        <button className="viewImage" onClick={handleClick}>
          <img src="/assets/shared/icon-view-image.svg" alt="view painting" />
          view image
        </button>
        <div className="paintingSlideText">
          <h2 className="paintingSlideName">{painting.name}</h2>
          <p className="subhead2">{painting.artist.name}</p>
        </div>
      </div>

      <div className="paintingDescBox">
        <div className="artistImage">
          <img src={`${painting.artist.image}`} alt={painting.artist.name} />
        </div>
        <p className="display">{painting.year}</p>
        <p className="paintingDescription">{painting.description}</p>
        <a
          className="sourceLink"
          href={painting.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to source
        </a>
      </div>
      {isModalOpen && (
        <div className="modal">
          <PaintingModal
            paintingName={painting.name}
            paintingSrc={painting.images.gallery}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      )}
    </div>
  );
};

export default PaintingSlide;
