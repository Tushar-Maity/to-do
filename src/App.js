import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Input from './components/Input';
import styled from 'styled-components';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodos } from './features/todoSlice';

function App() {
  const todos = useSelector(selectTodos);
  return (
    <AppContainer>
      <GlobalStyle />
      <Input />
      {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #EC255A;
  padding: 40px;
`;

export default App;
