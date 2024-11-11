import { useState } from "react";

interface LifeCounterProps {
  count: number;
  setCount: (count: number) => void;
}

function LifeCounter({ count, setCount }: LifeCounterProps) {
  const [background, setBackground] = useState<string>("default-background");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Array of background classes or URLs
  const backgrounds = [
    "background-1",
    "background-2",
    "background-3",
    "background-4",
    "background-5",
    "background-6",
    "background-7",
    "background-8",
  ];

  const handleBackgroundChange = (bg: string) => {
    setBackground(bg);
    setIsPopupOpen(false); // Close popup after selection
  };

  // Function to handle reduction and play the MP3 if background-5 is active
  const handleReduction = () => {
    if (background === "background-5") {
      const audio = new Audio("/src/assets/specialmode.mp4");
      audio.volume = 0.4;
      audio.play();
    }
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    // Background container
    <div
      className={`position-relative player-box img-background ${background}`}
    >
      <p className="life-value position-absolute top-50 start-50 text-light">
        {count}
      </p>
      <button
        className="life-button"
        onClick={handleReduction} // Use the new handleReduction function
      >
        Reduction
      </button>
      <button className="life-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>

      {/* Background Selector Button in the Top-Right Corner */}
      <button
        className="background-selector-button position-absolute"
        style={{ top: "5px", right: "5px" }}
        onClick={() => setIsPopupOpen(!isPopupOpen)}
      >
        <span className="material-symbols-outlined wallpaper-icon text-light">
          wallpaper
        </span>
      </button>

      {/* Popup with Background Options */}
      {isPopupOpen && (
        <div
          className="background-popup position-absolute d-grid"
          style={{ top: "0px", right: "0px" }}
        >
          {backgrounds.map((bg) => (
            <button
              key={bg}
              className={`background-option img-background ${bg}`}
              onClick={() => handleBackgroundChange(bg)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LifeCounter;
