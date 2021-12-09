import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { saveTodos } from '../features/todoSlice';

const Input = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodo = (e) => {
        console.log('adding a todo!');
        dispatch(saveTodos({
            item: input,
            done: false,
            id: Date.now()
        }))
        // setInput('');
    }
    return (
        <InputContainer>
            <InputField 
                type="text" 
                value={input} 
                onChange={e => setInput(e.target.value)}
            />
            <ButtonContainer onClick={addTodo}>
                ADD!
            </ButtonContainer>
        </InputContainer>
    )
}

const InputContainer = styled.div`
    background-color: #fff;
    width: 620px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-bottom: 25px;
`;

const InputField = styled.input`
    margin: 0 20px 0 10px;
    height: 35px;
    flex: 1;
    border: none;
    outline: none;
    font-size: 20px;
`;

const ButtonContainer = styled.button`
    background-color: #EC255A;
    color: #fff;
    border: none;
    outline: none;
    height: 32px;
    width: 80px;
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #EC255A;
        border: 1.5px solid #EC255A;
    }
`;

export default Input
