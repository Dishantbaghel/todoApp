import React, { useEffect, useState } from 'react'
import Form from './Form'
import TodosList from './TodosList';

const getLocalItems =()=>{
  let list = localStorage.getItem('lists')
  // console.log(list)
  if(list){
    return JSON.parse(localStorage.getItem('lists'))
  }
  else{
    return []
  }
  
}

const Todo = () => {
    const [input,setInput] = useState(''); // this is for input 
  const [todos,setTodos] = useState(getLocalItems()); // this is for todo
  const [editTodo,setEditTodo] =useState(null);
  const [isEdit,setIsEdit] = useState(false);

  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(todos))
    
},[todos])

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
          editTodo={editTodo}
          setEditTodo={setEditTodo} 
          setInput={setInput}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          />
          </div>
      </div>
    </div>
  )
}

export default Todo