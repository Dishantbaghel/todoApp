import React, { useState } from 'react'
import Form from './components/Form'
import TodosList from './components/TodosList';
import "./App.css";

const App = () => {
  const [input,setInput] = useState(''); // this is for input 
  const [todos,setTodos] = useState([]); // this is for todo

  return (
    <div className='parent'>
      <div className='child'>
        <h1 className='main-heading'>TODO APP</h1>
        <div className='container'>
        <Form input = {input} setInput = {setInput} todos = {todos} setTodos = {setTodos}/>
        <TodosList todos={todos} setTodos={setTodos}/></div>
      </div>
    </div>
  )
}

export default App