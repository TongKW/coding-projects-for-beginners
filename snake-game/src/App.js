import React, { useEffect, useState } from "react";
import GameArea from "./components/GameArea";
import StartModal from "./components/StartModal";
import FinishModal from "./components/FinishModal";

const App = () => {
  const [gameStatus, setGameStatus] = useState("idle");
  const [score, setScore] = useState(0);

  const [showFinishModal, setShowFinishModal] = useState(false);
  const [showStartModal, setStartModal] = useState(true);

  const startGame = () => {
    setGameStatus("playing");
    // Reset score and any other necessary states
  };

  const finishGame = () => {
    setGameStatus("finished");
    // TODO: reset
  };

  const resetGame = () => {
    setGameStatus("idle");
    setScore(0);
    // Reset other states
  };

  useEffect(() => {
    if (gameStatus === "idle") {
    } else if (gameStatus === "finished") {
      // TODO: stop the clock,
    } else {
      // TODO: Trigger init function (init snake position + orientation, reward position, score, start the clock)
    }
  }, [gameStatus]);

  return (
    <>
      {gameStatus === "idle" && <StartModal onStart={startGame} />}
      {gameStatus === "finished" && (
        <FinishModal onReset={resetGame} score={score} />
      )}
      <GameArea
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        setScore={setScore}
      />
    </>
  );
};

export default App;
