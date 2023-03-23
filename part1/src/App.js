import { useState } from "react";
import { Button } from "./components/Button";
import { Statistic } from "./components/Statistic";

export const App = () => {
  const [good, setGood] = useState({
    text: "Good",
    value: 0,
  });
  const [neutral, setNeutral] = useState({
    text: "Neutral",
    value: 0,
  });
  const [bad, setBad] = useState({
    text: "Bad",
    value: 0,
  });

  const handleGood = () => {
    const { value } = good;
    setGood({ ...good, value: value + 1 });
  };

  const handleBad = () => {
    const { value } = bad;
    setBad({ ...bad, value: value + 1 });
  };

  const handleNeutral = () => {
    const { value } = neutral;
    setNeutral({ ...neutral, value: value + 1 });
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text={good.text} />
      <Button handleClick={handleNeutral} text={neutral.text} />
      <Button handleClick={handleBad} text={bad.text} />

      <h2>Statistic</h2>
      {good.value === 0 && neutral.value === 0 && bad.value === 0 ? (
        "No feedback given"
      ) : (
        <div>
          <Statistic text={good.text} value={good.value} />
          <Statistic text={neutral.text} value={neutral.value} />
          <Statistic text={bad.text} value={bad.value} />

          <p>all: {good.value + neutral.value + bad.value}</p>
          <p>average: {(good.value + neutral.value + bad.value) / 3}</p>
          <p>
            positive:{" "}
            {(good.value * 100) / (good.value + neutral.value + bad.value)}
          </p>
        </div>
      )}
    </div>
  );
};
