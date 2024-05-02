import { ResetIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

export default function ResetButtons({ setCount }) {
  return (
    <ResetButton onClick={() => setCount(0)}>
      <StyledResetIcon />
    </ResetButton>
  );
}

const StyledResetIcon = styled(ResetIcon)`
  color: #1d2507;
  height: 40px;
  width: 40px;
`;

const ResetButton = styled.button`
  cursor: pointer;
  opacity: 0.3;
  transition: all 0.4s;
  width: fit-content;
  margin: auto;
  display: block;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
