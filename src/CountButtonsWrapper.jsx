import styled from 'styled-components';

export default function CountButtonsWrapper({ children }) {
  return <ButtonWrapper>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.div`
  background-color: #1d2507;
  height: 116px;
  width: 100%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  position: absolute;
  bottom: 0;
`;
