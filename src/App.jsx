import Card from './Card';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <Main>
      <Card />

      <GlobalStyles />
    </Main>
  );
}

const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
