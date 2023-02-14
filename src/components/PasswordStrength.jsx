import React from "react";
import { styled } from "../stitches.config";

const Block = styled("div", {
  backgroundColor: "transparent",
  height: "21px",
  width: "8.5px",
  marginRight: "6px",

  variants: {
    color: {
      weak: { border: "1.5px solid red" },
      normal: { border: "1.5px solid yellow" },
      strong: { border: "1.5px solid green" },
    },
  },
});

const Wrapper = styled("div", {
  display: "flex",
  backgroundColor: "#100f15",

  variants: {
    component: {
      true: {
        padding: "18px 18px",
        width: "344px",
        marginBottom: "21px",
        justifyContent: "space-between",
      },
    },
  },
});

const Label = styled("p", {
  color: "#3c3b43",
});

export default function Strength({ passwordLength = "12" }) {
  let blocks = [];
  let colorValue;

  const addBlocks = (i, stopCondition) => {
    if (i < stopCondition && i < 15) {
      i += 1;
      blocks.push(1);
      addBlocks(i, stopCondition);
    }
  };

  addBlocks(0, passwordLength);

  if (passwordLength < 5) {
    colorValue = "weak";
  } else if (passwordLength >= 5 && passwordLength < 9) {
    colorValue = "normal";
  } else if (passwordLength >= 9) {
    colorValue = "strong";
  }
  return (
    <Wrapper component>
      <Label>STRENGTH</Label>
      <Wrapper>
        {blocks.map((i, index) => (
          <Block key={i + index} color={colorValue} />
        ))}
      </Wrapper>
    </Wrapper>
  );
}
