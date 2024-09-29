import { useState } from "react";
import { Suspense } from "react";

import styled from "styled-components";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      Count: {count}
      <Button onClick={() => setCount((count) => count + 1)}>Increase count</Button>
      <h1
        style={{
          color: "green",
          fontSize: "20px",
          padding: "20px",
          textAlign: "center",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Hello world
      </h1>
    </Container>
  );
};

const Container = styled.div`
  background-color: blue;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: 0;
  background-color: transparent;

  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export default App;
