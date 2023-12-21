import React, { useState, useEffect } from "react";
import useInterval from "../hooks/useInterval";
import { stepFunction, checkCollision } from "../utils/gameHelper";

const GameArea = ({ gameStatus, setGameStatus, setScore, gridSize = 20 }) => {
  const [snake, setSnake] = useState({ body: [(0, 0)], orientation: "E" });
  const [reward, setReward] = useState(null);
  const [clockStarted, setClockStarted] = useState(false);

  useInterval(() => {
    if (gameStatus === "playing") {
      // Call the step function which will move the snake and handle the game logic
      stepFunction(snake, setSnake, reward, setReward, setScore, setGameStatus);
    }
  }, 1000); // 1 second period by default

  useEffect(() => {
    if (gameStatus === "playing" && !clockStarted) {
      setClockStarted(true);
    } else if (gameStatus !== "playing" && clockStarted) {
      setClockStarted(false);
    }
  }, [gameStatus, clockStarted]);

  // Render the game grid and other UI elements here

  return <div>{/* Render the Snake and Reward */}</div>;
};

export default GameArea;
