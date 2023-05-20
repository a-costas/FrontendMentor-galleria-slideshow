import { FC } from "react";
import "./SlideFooter.css";
import BackIcon from "./BackIcon";
import NextIcon from "./NextIcon";

interface SlideFooterProps {
  paintingName: string;
  paintingArtist: string;
  slideCount: number;
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SlideFooter: FC<SlideFooterProps> = ({
  paintingName,
  paintingArtist,
  slideCount,
  slideIndex,
  setSlideIndex,
}) => {
  const handlePrevClick = () => {
    window.scroll({ top: 0, behavior: "smooth" });
    setSlideIndex(slideIndex - 1);
  };

  const handleNextClick = () => {
    window.scroll({ top: 0, behavior: "smooth" });
    setSlideIndex(slideIndex + 1);
  };

  return (
    <div className="slideWrapper">
      <progress
        className="progressBar"
        max={slideCount}
        value={slideIndex + 1}
      />

      <div className="slideFooter">
        <div className="paintingFooterInfo">
          <h2 className="paintingFooterName">{paintingName}</h2>
          <p className="artistFooterName">{paintingArtist}</p>
        </div>
        <div className="footerBtns">
          <button
            className="slideBtn"
            disabled={slideIndex === 0}
            onClick={handlePrevClick}
          >
            <BackIcon stroke={slideIndex === 0 ? "#e6e6e6" : "black"} />
          </button>
          <button
            className="slideBtn"
            disabled={slideIndex === slideCount - 1}
            onClick={handleNextClick}
          >
            <NextIcon
              stroke={slideIndex === slideCount - 1 ? "#e6e6e6" : "black"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideFooter;
