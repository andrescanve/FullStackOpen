import React from "react";
import { Part } from "./Part";
import { nanoid } from "nanoid";

export const Content = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <Part key={nanoid()} parts={course.parts} />
        </div>
      ))}
    </div>
  );
};
