import React, { useState } from 'react'
import Form from './Form'
import TodosList from './TodosList';

const Todo = () => {
    const [input,setInput] = useState(''); // this is for input 
  const [todos,setTodos] = useState([]); // this is for todo
  const [editTodo,setEditTodo] =useState(null);
  return (
    <div className='parent'>
      <div className='child'>
        <h1 className='main-heading'>TODO APP</h1>
        <div className='container'>
        <Form 
          input = {input} 
          setInput = {setInput} 
          todos = {todos} 
          setTodos = {setTodos} 
          editTodo={editTodo} 
          setEditTodo={setEditTodo} />

        <TodosList 
          todos={todos} 
          setTodos={setTodos} 
          setEditTodo={setEditTodo} 
          setInput={setInput}
          />
          </div>
      </div>
    </div>
  )
}

export default Todo