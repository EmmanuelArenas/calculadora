import React from "react";
import "../styles/Input.css";

const Input = ({ input }) => {
  let arr = 0;
  for (let i in input) {
    let char = input.includes(i);
    if (char === input.includes(i - 1)) {
      arr += 1;
    }
  }

  console.log(arr);
  return <div className="input">{input}</div>;
};

export default Input;
