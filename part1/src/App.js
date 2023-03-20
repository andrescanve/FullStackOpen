import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Total } from "./components/Total";

export const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercise: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercise: 7,
  };

  const part3 = {
    name: "State of a component",
    exercise: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total
        exercise1={part1.exercise}
        exercise2={part2.exercise}
        exercise3={part3.exercise}
      />
    </div>
  );
};
