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

  const [selected, setSelected] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

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

  const handleSelected = () => {
    //set a random value
    const index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index);
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
          <table>
            <tbody>
              <tr>
                <Statistic text={good.text} value={good.value} />
                <Statistic text={neutral.text} value={neutral.value} />
                <Statistic text={bad.text} value={bad.value} />
              </tr>
            </tbody>
          </table>

          <p>all: {good.value + neutral.value + bad.value}</p>
          <p>average: {(good.value + neutral.value + bad.value) / 3}</p>
          <p>
            positive:{" "}
            {(good.value * 100) / (good.value + neutral.value + bad.value)}
          </p>
        </div>
      )}
      <div>
        <h2>Anecdotes</h2>
        <p>{anecdotes[selected]}</p>
        <button onClick={handleSelected}>Random quote</button>
      </div>
    </div>
  );
};
