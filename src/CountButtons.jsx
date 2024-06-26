import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

export default function CountButtons({ setCount, locked }) {
  // Prevent our count from going below 0
  const handleMinusClick = (event) => {
    setCount((prev) => {
      const newCount = prev - 1;
      if (newCount < 0) {
        return 0;
      }
      return newCount;
    });

    // Erase focus so we can use spacebar without pressing it again
    // event.currentTarget.blur();

    // Alternatively, use this code on the component:
    // onKeyDown={(event) => {
    //  if (event.code === 'Space') {
    //     event.stopPropagation();
    //   }
    // }}
  };

  const handlePlusClick = (event) => {
    setCount((prev) => prev + 1);

    // Erase focus so we can use spacebar without pressing it again
    event.currentTarget.blur();
  };

  return (
    <ButtonWrapper>
      <CountButton
        disabled={locked}
        onClick={handleMinusClick}
        onKeyDown={(event) => {
          if (event.code === 'Space') {
            event.stopPropagation();
          }
        }}
      >
        <StyledMinusIcon />
      </CountButton>
      <CountButton disabled={locked} onClick={handlePlusClick}>
        <StyledPlusIcon />
      </CountButton>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  background-color: #1d2507;
  height: 116px;
  width: 100%;
  margin-top: auto;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
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
