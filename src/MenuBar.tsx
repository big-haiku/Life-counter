import React, { useRef, useState, useEffect } from "react";
import PlayerControls from "./PlayerControls";
import Reset from "./Reset";
import CallGPT from "./CallGPT";

interface MenuBarProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  playerCount: number;
  setPlayerCount: (count: number) => void;
  resetLifeCounts: () => void;
}

function MenuBar({
  isExpanded,
  setIsExpanded,
  playerCount,
  setPlayerCount,
  resetLifeCounts,
}: MenuBarProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<HTMLDivElement>(null);
  const gptRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("6vh");

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setMaxHeight(`${contentHeight}px`);
    } else {
      setMaxHeight("3vh");
    }
  }, [isExpanded]);

  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      (contentRef.current && contentRef.current.contains(e.target as Node)) ||
      (resetRef.current && resetRef.current.contains(e.target as Node)) ||
      (gptRef.current && gptRef.current.contains(e.target as Node))
    ) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`menu-bar d-flex align-items-center justify-content-around ${
        isExpanded ? "expanded" : ""
      }`}
      onClick={handleMenuClick}
      style={{ maxHeight, transition: "max-height 0.3s ease" }}
    >
      <div
        className={`player-control-wrapper d-flex flex-column fs-3 text-center text-light pt-1 pb-3 ${
          isExpanded ? "fade-in" : "fade-out"
        }`}
        ref={contentRef}
      >
        <PlayerControls
          playerCount={playerCount}
          setPlayerCount={setPlayerCount}
        />
      </div>
      <div className={`${isExpanded ? "fade-in" : "fade-out"}`} ref={resetRef}>
        <Reset resetLifeCounts={resetLifeCounts} />
      </div>
      <div className={`${isExpanded ? "fade-in" : "fade-out"}`} ref={gptRef}>
        <CallGPT />
      </div>
    </div>
  );
}

export default MenuBar;
