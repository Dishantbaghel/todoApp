import React, { useState } from 'react';

const TodosList = ({ todos, setTodos, editTodo, setEditTodo, setInput, isEdit, setIsEdit }) => {
  const [editedText, setEditedText] = useState('');

  const handleEdit = (id) => {
    setIsEdit(true);
    setEditTodo(id);
    const editedTodo = todos.find((todo) => todo.id === id);
    setEditedText(editedTodo.title);
  };

  const handleSave = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editTodo ? { ...todo, title: editedText } : todo
    );
    setTodos(updatedTodos);
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
                  className='input-field'
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
              ) : (
                todo.title
              )}
            </div>
            {isEdit && editTodo === todo.id ? (
              <button className='btn' onClick={handleSave}>
                Save
              </button>
            ) : (
              <button className='btn' onClick={() => handleEdit(todo.id)}>
                Edit
              </button>
            )}
            <button className='btn' onClick={() => handleDelete(todo)}>
              Delete
            </button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
