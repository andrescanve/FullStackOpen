import React from "react";

export const Part = ({ part, exercise }) => {
  console.log(part, exercise);
  return (
    <div>
      <p>
        {part} {exercise}
      </p>
    </div>
  );
};
