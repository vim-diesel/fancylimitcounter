import React from 'react';

import Count from './Count';
import CountButtons from './CountButtons';
import styled from 'styled-components';
import ResetButtons from './ResetButtons';

export default function Card() {
  const [count, setCount] = React.useState(0);

  // If the User reaches 5 counts, the app locks until they reset
  const locked = count === 5 ? true : false;

  return (
    // CardSection does not have its own file, it is just a styled div, but we 
    // need the locked prop to style it correctly
    <CardSection locked={locked}>
      {locked ? (
        <CardTitle>Locked! Buy Pro to keep counting!</CardTitle>
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
  background-color: ${props => props.locked ? '#a3d11b' : '#bef227'};
  width: 476px;
  height: 65%;
  border-radius: 12px;
  box-shadow: 0 25px 121px rgba(0, 0, 0, 0.5);
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0px;
  transition: 0.4s;
`;

const CardTitle = styled.h1`
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 200px;
  text-align: center;
  line-height: 0.9;
  font-weight: 500;
  font-size: 32px;
`;

