import React from 'react';
import styled from 'styled-components';

const TodoItem = ({ item, done }) => {
    return (
        <TodoItemContainer>
            <h1>{item}</h1>
        </TodoItemContainer>
    )
}

const TodoItemContainer = styled.div`
    width: 600px;
    background-color: #fff;
    height: 120px;
    border-radius: 12px;
    padding: 10px;
    margin-bottom: 8px;
`;

export default TodoItem
