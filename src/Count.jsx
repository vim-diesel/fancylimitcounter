import styled from 'styled-components';

export default function Count({ count }) {
  return <CountText>{count}</CountText>
}

const CountText = styled.p`
  color: #1d2507;
  font-size: 200px;
  font-weight: 600;
  line-height: 1;
  margin-top: auto;
`;
