import React from "react";
import { Part } from "./Part";

export const Content = ({ parts }) => {
  const getTotal = () => {
    const exercises = parts.map((part) => part.exercises);
    const total = exercises.reduce((total, exercise) => total + exercise, 0);

    return total;
  };
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>Total of {getTotal()} exercises</p>
    </div>
  );
};
