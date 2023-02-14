import React, { useState } from "react";
import { styled, keyframes } from "./stitches.config";
import Options from "./components/Options";
import Display from "./components/Display";

const wrapperAnimation = keyframes({
  from: { opacity: 0, top: "70%" },
  to: { opacity: 1, top: "50%" },
});

const Wrapper = styled("div", {
  maxWidth: "384px",
  width: "100%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  animation: `${wrapperAnimation} 2s`,
});

const Title = styled("p", {
  color: "white",
  textAlign: "center",
  fontSize: "24px",
  marginBottom: "21px",
});

function App() {
  const [password, setPassword] = useState("P4$5W0rD!");

  return (
    <Wrapper>
      <Title>Password Generator</Title>
      <Display password={password} />
      <Options setPassword={setPassword} />
    </Wrapper>
  );
}

export default App;
