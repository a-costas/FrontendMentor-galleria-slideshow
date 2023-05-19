import { FC } from "react";

import "./PaintingModal.css";

interface PaintingModalProps {
  paintingName: string;
  paintingSrc: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaintingModal: FC<PaintingModalProps> = ({
  paintingName,
  paintingSrc,
  setIsModalOpen,
}) => {
  return (
    <div className="modalScreen">
      <button
        className="closeModalBtn"
        onClick={() => {
          setIsModalOpen(false);
          document.body.style.overflow = "unset";
        }}
      >
        Close
      </button>
      <img src={paintingSrc} alt={paintingName} />
    </div>
  );
};

export default PaintingModal;
