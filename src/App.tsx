import React, { useState, useEffect } from "react";
import LifeCounter from "./LifeCounter";
import MenuBar from "./MenuBar";

function App() {
  const [playerCount, setPlayerCount] = useState(2); // Start with 2 players by default
  const [isMenuExpanded, setIsMenuExpanded] = useState(false); // Track MenuBar expansion
  const [lifeCounts, setLifeCounts] = useState(Array(playerCount).fill(40)); // Initialize life counts

  useEffect(() => {
    setLifeCounts(Array(playerCount).fill(40)); // Reset life counts based on player count
  }, [playerCount]);

  const resetLifeCounts = () => {
    setLifeCounts(Array(playerCount).fill(40)); // Reset life counts to 40 for each player
  };

  return (
    <>
      <div className={`d-grid life-grid layout-${playerCount}`}>
        {lifeCounts.map((count, index) => (
          <LifeCounter
            key={index}
            count={count}
            setCount={(newCount) => {
              const newCounts = [...lifeCounts];
              newCounts[index] = newCount;
              setLifeCounts(newCounts);
            }}
          />
        ))}
        <MenuBar
          isExpanded={isMenuExpanded}
          setIsExpanded={setIsMenuExpanded}
          playerCount={playerCount}
          setPlayerCount={setPlayerCount}
          resetLifeCounts={resetLifeCounts} // Pass reset function
        />
      </div>
    </>
  );
}

export default App;
