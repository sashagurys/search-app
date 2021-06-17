import React from "react";

export default function DropdownInput({ options, htmlName, handler }) {
  return (
    <select name={htmlName} onChange={(e) => handler(e.target.value)}>
      <option selected disabled>
        {" "}
        --Choose--{" "}
      </option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}
