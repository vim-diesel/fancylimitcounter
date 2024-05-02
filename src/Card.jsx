import React from 'react';

import Count from './Count';
import CountButtons from './CountButtons';
import styled from 'styled-components';
import ResetButtons from './ResetButtons';

export default function Card() {
  const [count, setCount] = React.useState(0);

  // If the User reaches 5 counts, the app locks until they reset
  // Derived state, no need for a useState hook
  const locked = count === 5 ? true : false;

  // Window event listener to capture space bar to increase the count
  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);


  return (
    // CardSection does not have its own file, it is just a styled div, but we
    // need the locked prop to style it correctly
    <CardSection locked={locked}>
      {locked ? (
        <CardTitle>
          Buy <strong>Pro</strong> to keep counting!
        </CardTitle>
      ) : (
        <CardTitle>Fancy Counter</CardTitle>
      )}
      <Count count={count} />
      <ResetButtons setCount={setCount} />
      <CountButtons locked={locked} setCount={setCount} />
    </CardSection>
  );
}

const CardSection = styled.div`
  background-color: ${(props) => (props.locked ? '#a3d11b' : '#bef227')};
  width: 476px;
  height: 615px;
  border-radius: 12px;
  box-shadow: 0 25px 121px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s;
`;

const CardTitle = styled.h1`
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 64px;
  width: 250px;
  text-align: center;
  line-height: 0.9;
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 48px;
`;
