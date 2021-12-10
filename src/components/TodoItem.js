import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const TodoItem = ({ item, done, id }) => {

    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id));
    }
    return (
        <TodoItemContainer>
            <h1>{item}</h1>
            <Checkbox type="checkbox" checked={done} onChange={handleCheck}/>
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
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        margin-right: 12px;
    }
`;

const Checkbox = styled.input`
    cursor: pointer;
    height: 18px;
    width: 18px;
`;

export default TodoItem
