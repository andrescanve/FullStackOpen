import React from "react";
import { Content } from "./Content";
import { Header } from "./Header";

export const Course = ({ courses }) => {
  return (
    <div>
      <Header />
      <Content courses={courses} />
    </div>
  );
};
