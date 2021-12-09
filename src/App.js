import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Input from './components/Input';
import styled from 'styled-components';
import TodoItem from './components/TodoItem';

const todoList = [
  {
    item: 'this is a todo item',
    done: false,
    id: Math.random(),
  },
  {
    item: 'this is a todo item2',
    done: false,
    id: Math.random(),
  },
  {
    item: 'this is a todo item3',
    done: true,
    id: Math.random(),
  }
];

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Input />
      {todoList.map(todo => <TodoItem key={todo.id} {...todo} />)}
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
