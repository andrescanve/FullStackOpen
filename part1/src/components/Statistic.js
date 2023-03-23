import React from "react";

export const Statistic = ({ text, value }) => {
  return (
    <>
      <td>{text}:</td>
      <td>{value}</td>
    </>
  );
};
