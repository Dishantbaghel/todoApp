import React from 'react'
const TodosList = ({todos,setTodos}) => {

    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }
  return (
    <div>
        {
            todos.map((todo)=>(
                <li className='list' key={todo.id}>
                    <input className='input-field' type="text" value={todo.title} onChange={(e)=>e.preventDefault()} />
                    <button className='btn' onClick={()=>handleDelete(todo)}>x</button>
                    {/* <button onClick={()=>handleDelete(todo)}>x</button> */}
                    {/* <TodoBtn onclick={add} value={"ADD"} /> */}
                    {/* <TodoBtn onclick={handleDelete} value={"Delete"}/> */}
                </li>
            ))
        }
    </div>
  )
}

export default TodosList