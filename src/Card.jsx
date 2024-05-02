import React from 'react';

import Count from './Count';
import CountButtons from './CountButtons';
import styled from 'styled-components';
import ResetButtons from './ResetButtons';

export default function Card() {
  const [count, setCount] = React.useState(0);

  return (
    <CardSection>
      <CardTitle>Limited Counter</CardTitle>
      <Count count={count} />
      <ResetButtons setCount={setCount}/>
      <CountButtons setCount={setCount} />
    </CardSection>
  );
}

const CardSection = styled.div`
  background-color: #bef227;
  width: 476px;
  height: 55%;
  border-radius: 12px;
  box-shadow: 0 25px 121px rgba(0, 0, 0, 0.5);
  margin: auto;
  padding-top: 24px;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
`;

const CardTitle = styled.h1`
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 200px;
  margin: auto;
  text-align: center;
  line-height: 0.9;
  font-weight: 500;
  font-size: 32px;
`;
