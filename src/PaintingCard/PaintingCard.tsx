import React from "react";
import { FC } from "react";

import { Painting } from "../types/Painting";
import "./PaintingCard.css";

interface PaintingCardProps {
  painting: Painting;
}

const PaintingCard: FC<PaintingCardProps> = ({ painting }) => {
  return (
    <div className="paintingCard">
      <img
        className="painting"
        src={`${painting.images.thumbnail}`}
        alt={painting.name}
      />
      <div className="paintingText">
        <h2 className="paintingName">{painting.name}</h2>
        <p className="subhead2">{painting.artist.name}</p>
      </div>
    </div>
  );
};

export default PaintingCard;
