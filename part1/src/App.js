import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Total } from "./components/Total";

export const App = () => {
  const course = "Half Stack application development";
  const part = [
    {
      name: "Fundamentals of React",
      exercise: 10,
    },
    {
      name: "Using props to pass data",
      exercise: 7,
    },
    {
      name: "State of a component",
      exercise: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content part={part} />
      <Total part={part} />
    </div>
  );
};
