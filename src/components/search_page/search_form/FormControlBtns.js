import React from "react";

export default function FormControlBtns({ handler }) {
  return (
    <div>
      <input type="reset" value="Clear" />
      <input
        type="submit"
        value="Search"
        onClick={(e) => {
          e.preventDefault();
          handler();
        }}
      />
    </div>
  );
}
