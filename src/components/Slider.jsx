import React from "react";
import { styled } from "../stitches.config";

const RangeSlider = styled("div", {
  padding: "1.2px 0",
  margin: "18px 0",
  paddingLeft: "4px",
  background: "#100f15",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  "& input": {
    appearance: "none !important",
    maxWidth: "344px",
    width: "100%",
    height: "2px",
    background: "#100f15",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
});

const SliderLength = styled("div", {
  display: "flex",
  justifyContent: "space-Between",
  color: "white",
  fontSize: "21px",
  [`& .CharacterLenght`]: {
    color: "#a4ffaf",
    fontSize: "23px",
  },
});

const Wrapper = styled("div", {
  maxWidth: 999,
  width: "100%",
});

export default function Slider({ sliderValue, setSliderValue }) {
  return (
    <Wrapper>
      <SliderLength>
        <p>Character Lenght</p>
        <p className="CharacterLenght">{sliderValue}</p>
      </SliderLength>
      <RangeSlider>
        <input
          type="range"
          min="2"
          max="24"
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
        />
      </RangeSlider>
    </Wrapper>
  );
}
