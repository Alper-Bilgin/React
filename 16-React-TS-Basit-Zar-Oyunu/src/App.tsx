import React, { useState } from "react";
import { DicePair } from "../types/Dice";
import { getDiceEmoji } from "../utils/diceEmoji";
import "./App.css";

const rollDice = (): DicePair => ({
  die1: Math.floor(Math.random() * 6) + 1,
  die2: Math.floor(Math.random() * 6) + 1,
});

// Sol tarafın zarları otomatik 2 saniyede bir değişiyor
// useEffect(() => {
//   const interval = setInterval(() => {
//     setLeftDice(rollDice());
//   }, 2000);
//   return () => clearInterval(interval);
// }, []);

const App: React.FC = () => {
  const [leftDice, setLeftDice] = useState<DicePair>({ die1: 1, die2: 1 });
  const [rightDice, setRightDice] = useState<DicePair>({ die1: 1, die2: 1 });
  const [winner, setWinner] = useState<string>("");
  const [leftScore, setLeftScore] = useState<number>(0);
  const [rightScore, setRightScore] = useState<number>(0);

  const handleRoll = () => {
    const newLeftDice = rollDice();
    const newRightDice = rollDice();

    setLeftDice(newLeftDice);
    setRightDice(newRightDice);

    const leftTotal = newLeftDice.die1 + newLeftDice.die2;
    const rightTotal = newRightDice.die1 + newRightDice.die2;

    if (leftTotal > rightTotal) {
      setWinner("🎉 Kazanan: Sol!");
      setLeftScore((prev) => prev + 1);
    } else if (rightTotal > leftTotal) {
      setWinner("🎉 Kazanan: Sağ!");
      setRightScore((prev) => prev + 1);
    } else {
      setWinner("🤝 Berabere!");
    }
  };

  return (
    <div className="container">
      <div className="side">
        <h2>Sol Zarlar 🎲</h2>
        <div className="dice">
          {getDiceEmoji(leftDice.die1)} {getDiceEmoji(leftDice.die2)}
        </div>
        <div>Toplam: {leftDice.die1 + leftDice.die2}</div>
        <div>Skor: {leftScore}</div>
      </div>

      <div className="side">
        <h2>Sağ Zarlar 🎲</h2>
        <div className="dice">
          {getDiceEmoji(rightDice.die1)} {getDiceEmoji(rightDice.die2)}
        </div>
        <div>Toplam: {rightDice.die1 + rightDice.die2}</div>
        <div>Skor: {rightScore}</div>
        <button onClick={handleRoll}>🎲 Zar At</button>
        <h3>{winner}</h3>
      </div>
    </div>
  );
};

export default App;
