import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

export default function CountButtons({ setCount }) {
  // Prevent our count from going below 0
  const handleMinusClick = () => {
    setCount((prev) => {
      const newCount = prev - 1;
      if (newCount < 0) {
        return 0;
      }
      return newCount;
    });
  };

  return (
    <ButtonWrapper>
      <CountButton onClick={handleMinusClick}>
        <StyledMinusIcon />
      </CountButton>
      <CountButton onClick={() => setCount((prev) => prev + 1)}>
        <StyledPlusIcon />
      </CountButton>
    </ButtonWrapper>
  );
}

const StyledMinusIcon = styled(MinusIcon)`
  color: #bdfe00;
  opacity: 0.9;
  height: 40px;
  width: 40px;
`;

const StyledPlusIcon = styled(PlusIcon)`
  color: #bdfe00;
  opacity: 0.9;
  height: 40px;
  width: 40px;
`;

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

const CountButton = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s;

  &:hover,
  &:focus {
    background-color: #212b06;
  }

  &:first-child {
    border-right: 1px solid rgba(189, 254, 0, 0.07);
  }
`;
