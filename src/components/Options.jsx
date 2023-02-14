import React, { useState } from "react";
import { styled } from "../stitches.config";
import { generatePassword } from "./passwordGenerator";
import Slider from "./Slider";
import Checks from "./Checks";
import PasswordStrength from "./PasswordStrength";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#24232b",
  padding: "18px 18px",
});

const Button = styled("button", {
  textAlign: "center",
  backgroundColor: "#a4ffaf",
  color: "#24232b",
  padding: "18px 18px",
  width: "344px",
  fontSize: "19px",
  fontWeight: "bolder",
  cursor: "pointer",
  "&:active": {
    position: "relative",
    top: "2px",
    left: "2px",
  },
});

export default function Options({ setPassword }) {
  const [sliderValue, setSliderValue] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const handleClick = () => {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      setUppercase(true);
      alert("at least on option must be true");
    }
    let password = generatePassword(
      sliderValue,
      uppercase,
      lowercase,
      numbers,
      symbols
    );
    setPassword(password);
  };
  return (
    <Wrapper>
      <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
      <Checks
        uppercase={uppercase}
        setUppercase={setUppercase}
        lowercase={lowercase}
        setLowercase={setLowercase}
        numbers={numbers}
        setNumbers={setNumbers}
        symbols={symbols}
        setSymbols={setSymbols}
      />
      <PasswordStrength passwordLength={sliderValue} />
      <Button onClick={handleClick}>Generate &gt;</Button>
    </Wrapper>
  );
}
