import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo,errorMessage,setErrorMessage }) => {
    

    const onInputChange = (e) => {
        setInput(e.target.value);
        setErrorMessage('');
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        if (!editTodo && trimmedInput !== '') {
            setTodos([...todos, { id: uuidv4(), title: trimmedInput, completed:false }]);
            setInput('');
        } else {
            setErrorMessage('plz enter data');
        }
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" className='form-input-field' placeholder='Enter todo here...' required value={input} onChange={onInputChange} />
            <button className='btn' type='submit'><FontAwesomeIcon icon={faPlus} /></button>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </form>
    );
};

export default Form;
