import React from 'react'

const Form = ({input,setInput,todos,setTodos}) => {

    const onInputChange =(e)=> {
        setInput(e.target.value)
    }
    const onFormSubmit =(e)=>{
        e.preventDefault();
        setTodos([...todos,{id: Date.now(), title:input, completed:false}])
        setInput('')
    }

  return (
    <form onSubmit={onFormSubmit}>
        <input className='input-field' type="text" placeholder='Enter todo here...' required value={input} onChange={onInputChange} />
        <button className='btn' type='submit'>Add</button>
    </form>
  )
}

export default Form