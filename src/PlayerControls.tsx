import React, { useState } from "react";

interface PlayerControlsProps {
  playerCount: number;
  setPlayerCount: (count: number) => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({
  playerCount,
  setPlayerCount,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePlayerSelection = (count: number) => {
    setPlayerCount(count);
    setIsPopupOpen(false); // Close popup after selecting a player count
  };

  return (
    <>
      <span
        className="material-symbols-outlined fs-3 text-light icon"
        onClick={() => setIsPopupOpen(true)}
      >
        groups
      </span>

      {isPopupOpen && (
        <>
          <div
            className="popup-overlay"
            onClick={() => setIsPopupOpen(false)}
          />
          <div className="player-popup d-grid gap-3">
            <button
              className="text-light"
              onClick={() => handlePlayerSelection(2)}
            >
              2
            </button>
            <button
              className="text-light"
              onClick={() => handlePlayerSelection(3)}
            >
              3
            </button>
            <button
              className="text-light"
              onClick={() => handlePlayerSelection(4)}
            >
              4
            </button>
            <button
              className="text-light"
              onClick={() => handlePlayerSelection(5)}
            >
              5
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PlayerControls;
