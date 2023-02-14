import React from "react";
import { styled, keyframes } from "../stitches.config";

const wrapperAnimation = keyframes({
  "60%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const Wrapper = styled("div", {
  border: "4px solid #a4ffaf",
  padding: "14px",
  width: "100%",
  backgroundColor: "#FFFFFF",
  position: "fixed",
  top: -62,
  left: 0,
  textAlign: "center",
  fontSize: "24px",
  animation: `${wrapperAnimation} 2s`,
  "& span": {
    color: "magenta",
  },
});

export default function CopyAlert({ text }) {
  return (
    <Wrapper>
      <span>{text}</span> has been copied!
    </Wrapper>
  );
}
