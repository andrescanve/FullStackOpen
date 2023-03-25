import React from "react";
import { Content } from "./Content";
import { Header } from "./Header";

export const Course = ({ course }) => {
  const { name, parts } = course;
  return (
    <div>
      <Header title={name} />
      <Content parts={parts} />
    </div>
  );
};
