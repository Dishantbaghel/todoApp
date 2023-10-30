import React from 'react'
const TodosList = ({todos,setTodos,setEditTodo,setInput}) => {

    const handleEdit = (id) => {
            setEditTodo(id);
            setInput(id)
    }

    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }
  return (
    <div>
        {
            todos.map((todo)=>(
                <div className='display-todos'>
                <li className='list' key={todo.id}>
                    <input className='input-field' type="text" value={todo.title} onChange={(e)=>e.preventDefault()} />
                    <button className='btn' onClick={()=>handleEdit(todo)}>Edit</button>
                    <button className='btn' onClick={()=>handleDelete(todo)}>Delete</button>
                </li>
                </div>
            ))
        }
    </div>
  )
}

export default TodosList