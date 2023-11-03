import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "../staticData/buttonData";

const TodosList = ({
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  isEdit,
  setIsEdit,
  errorMessage,
  setErrorMessage,
  active,
  filteredTodos,
  handleComplete,
  handleDelete,
  handleEdit,
  handleFilter,
  handleSave,
  editedText,
  onChangeInput
}) => {
  return (
    <div>
      <div className="status">
        {data.map((ele) => {
          return (
            <button
              className={ele.id === active ? "active" : "status-btn"}
              onClick={() => handleFilter(ele.id, ele.name)}
              key={ele.id}
            >
              {ele.name}
            </button>
          );
        })}
      </div>
      {filteredTodos.map((todo) => (
        <div className="display-todos" key={todo.id}>
          <li className="list">
            <div className="single-todo">
              <div className="checkbox-text">
                <input
                  className="check-box"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleComplete(todo.id)}
                />
                {isEdit && editTodo === todo.id ? (
                  <input
                    type="text"
                    className="todos-input-field"
                    value={editedText}
                    onChange={onChangeInput}
                  />
                ) : (
                  todo.title
                )}
              </div>
              {todo.completed == true ? (
                <div className="done-msg">Done</div>
              ) : (
                ""
              )}
            </div>
            {isEdit && editTodo === todo.id ? (
              <button className="btn" onClick={handleSave}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
            ) : (
              <>
                <button className="btn" onClick={() => handleEdit(todo.id)}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button className="btn" onClick={() => handleDelete(todo)}>
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
