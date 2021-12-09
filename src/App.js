import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Input from './components/Input';
import styled from 'styled-components';
// import { Counter } from './features/counter/Counter';

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Input />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #EC255A;
  padding: 40px;
`;

export default App;
