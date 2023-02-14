import React from "react";
import { styled } from "../stitches.config";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifySelf: "flex-start",
  padding: "18px 18px",
  color: "white",
  width: "384px",
  "& input": {
    margin: "0 7px 11px 0",
  },
});

export default function Checks({
  uppercase,
  setUppercase,
  lowercase,
  setLowercase,
  numbers,
  setNumbers,
  symbols,
  setSymbols,
}) {
  return (
    <Wrapper>
      <label>
        <input
          type="checkbox"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
        />
        Include Uppercase Letters
      </label>
      <label>
        <input
          type="checkbox"
          checked={lowercase}
          onChange={() => setLowercase(!lowercase)}
        />
        Include Lowercase Letters
      </label>
      <label>
        <input
          type="checkbox"
          checked={numbers}
          onChange={() => setNumbers(!numbers)}
        />
        Include Numbers
      </label>
      <label>
        <input
          type="checkbox"
          checked={symbols}
          onChange={() => setSymbols(!symbols)}
        />
        Include Symbols
      </label>
    </Wrapper>
  );
}
