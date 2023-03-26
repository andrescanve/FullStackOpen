import React from "react";

export const Part = ({ parts }) => {
  const getTotal = () => {
    const exercises = parts.map((part) => part.exercises);
    const total = exercises.reduce((total, exercise) => total + exercise);

    return total;
  };
  return (
    <div>
      {parts.map((part) => (
        <div key={part.id}>
          {part.name}: {part.exercises}
        </div>
      ))}
      <strong>Total of {getTotal()} exercises</strong>
    </div>
  );
};
