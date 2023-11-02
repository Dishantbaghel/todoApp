import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const TodosList = ({ todos, setTodos, editTodo, setEditTodo, isEdit, setIsEdit, errorMessage, setErrorMessage }) => {
  const [editedText, setEditedText] = useState('');
  const [filter, setFilter] = useState('all');

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  let filteredTodos = todos;

  if (filter === 'completed') {
    filteredTodos = todos.filter(todo => todo.completed);
  } else if (filter === 'incomplete') {
    filteredTodos = todos.filter(todo => !todo.completed);
  }

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const onChangeInput = (e) => {
    setEditedText(e.target.value);
    setErrorMessage('');
  };

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
    } else {
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
      <div className='status'>
        <button className='status-btn' onClick={() => handleFilter('all')}>
        ALL
        </button>
        <button className='status-btn' onClick={() => handleFilter('completed')}>
        <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className='status-btn' onClick={() => handleFilter('incomplete')}>
        <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      {filteredTodos.map((todo) => (
        <div className='display-todos' key={todo.id}>
          <li className='list'>
            <div className='single-todo'>
              {isEdit && editTodo === todo.id ? (
                <input
                  type='text'
                  className='todos-input-field'
                  value={editedText}
                  onChange={onChangeInput}
                />
              ) : (
                todo.title
              )}
              <input
                className='check-box'
                type='checkbox'
                checked={todo.completed}
                onChange={() => handleComplete(todo.id)}
              />
            </div>
            {isEdit && editTodo === todo.id ? (
              <button className='btn' onClick={handleSave}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
            ) : (
              <>
                <button className='btn' onClick={() => handleEdit(todo.id)}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button className='btn' onClick={() => handleDelete(todo)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </>
            )}
          </li>
        </div>
      ))}
    </div>
  );
};

export default TodosList;