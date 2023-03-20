import React from "react";

export const Total = ({ exercise1, exercise2, exercise3 }) => {
  return (
    <div>
      <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
    </div>
  );
};
