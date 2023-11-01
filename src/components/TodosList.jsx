import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

const TodosList = ({ todos, setTodos, editTodo, setEditTodo, setInput, isEdit, setIsEdit,errorMessage,setErrorMessage }) => {
  const [editedText, setEditedText] = useState(''); // editedText vo h jo text edit karna h

  const onChangeInput=(e)=>{
    setEditedText(e.target.value)
    setErrorMessage('')
  }

  const handleEdit = (id) => {
    setIsEdit(true);
    setEditTodo(id);
    const editedTodo = todos.find((todo) => todo.id === id);
    setEditedText(editedTodo.title);
  };

const handleSave = () => {
  const trimmedText = editedText.trim();
  if (trimmedText !== '') {
    const updatedTodos = todos.map((todo) =>
      todo.id === editTodo ? { ...todo, title: trimmedText } : todo
    );
    setTodos(updatedTodos);
  }  else {
    setErrorMessage('Todo cannot be empty');
  }
  setEditTodo(null);
  setIsEdit(false);
};

  

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div className='display-todos' key={todo.id}>
          <li className='list'>
            <div className='single-todo'>
              {isEdit && editTodo === todo.id ? (
                <input
                  type='text'
                  className='todos-input-field'
                  value={editedText}
                  onChange={onChangeInput }
                />
              ) : (
                todo.title
              )}
            </div>
            {isEdit && editTodo === todo.id ? (
              <button className='btn' onClick={handleSave}>
              <FontAwesomeIcon icon={faCheck} />
              </button>
            ) : (
              <button className='btn' onClick={() => handleEdit(todo.id)}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            )}
            <button className='btn' onClick={() => handleDelete(todo)}>
            <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
