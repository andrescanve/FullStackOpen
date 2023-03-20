import { Part } from "./Part";

export const Content = ({ part }) => {
  console.log(part);
  return (
    <>
      {part.map((item) => (
        <Part part={item.name} exercise={item.exercise} />
      ))}
    </>
  );
};
