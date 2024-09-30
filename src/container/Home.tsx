import styled, { keyframes } from "styled-components";
import { useState } from "react";
const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <GradientBackground>
      <WelcomeMessage>환영합니다!</WelcomeMessage>
      <CountMessage>Count: {count} </CountMessage>
      <Button onClick={() => setCount((count) => count + 1)}>Increase count</Button>
    </GradientBackground>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const CountMessage = styled.h2`
  text-align: center;
  font-size: 2em;
  color: #fff;
`;

const WelcomeMessage = styled.h1`
  text-align: center;
  margin-top: 50px;
  font-size: 2.5em;
  color: #fff;
  animation: ${fadeIn} 2s ease-in-out;
`;

const GradientBackground = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Button = styled.button`
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 12px;
  outline: none;

  &:hover {
    background: #23d5ab;
    color: black;
  }

  &:active {
    transform: scale(0.95);
  }
`;
export default HomePage;
