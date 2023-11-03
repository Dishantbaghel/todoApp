import TodosList from "./TodosList";
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { data } from "../staticData/buttonData";

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

const Home = () => {
  const [input, setInput] = useState(""); // this is for input
  const [todos, setTodos] = useState(getLocalItems()); // this is for todo
  const [editTodo, setEditTodo] = useState(null); // editTodo = this contain edited text and replace with new one.
  const [isEdit, setIsEdit] = useState(false); // this is for edit button (true/false)
  const [errorMessage, setErrorMessage] = useState(""); // this is for display error
  const [completed, setCompleted] = useState(false);

  const [editedText, setEditedText] = useState("");
  const [filter, setFilter] = useState("All"); // this is for filter the todos
  const [active, setActive] = useState(data[0].id); // this is for change the color of the buttons on click
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const filterTodos = () => {
      if (filter === "All") {
        return todos;
      } else if (filter === "Completed") {
        return todos.filter((todo) => todo.completed);
      } else if (filter === "Incomplete") {
        return todos.filter((todo) => !todo.completed);
      }
    };
    setFilteredTodos(filterTodos());
  }, [filter, todos]);

  const onInputChange = (e) => {
    setInput(e.target.value);
    setErrorMessage("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!editTodo && trimmedInput !== "") {
      setTodos([
        ...todos,
        { id: uuidv4(), title: trimmedInput, completed: false },
      ]);
      setInput("");
    } else {
      setErrorMessage("plz enter data");
    }
  };


  const handleFilter = (id, name) => {
    setFilter(name);
    setActive(id);
  };

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const onChangeInput = (e) => {
    setEditedText(e.target.value);
    setErrorMessage("");
  };

  const handleEdit = (id) => {
    setIsEdit(true);
    setEditTodo(id);
    const editedTodo = todos.find((todo) => todo.id === id);
    setEditedText(editedTodo.title);
  };

  const handleSave = () => {
    const trimmedText = editedText.trim();
    if (trimmedText !== "") {
      const updatedTodos = todos.map((todo) =>
        todo.id === editTodo ? { ...todo, title: trimmedText } : todo
      );
      setTodos(updatedTodos);
    } else {
      setErrorMessage("Todo cannot be empty");
    }
    setEditTodo(null);
    setIsEdit(false);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };



  return (
      <div className='parent'>
      <div className='child'>
        <h1 className='main-heading'>TODO APP</h1>
        <div className='container'>

        <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="form-input-field"
          placeholder="Enter todo here..."
          required
          value={input}
          onChange={onInputChange}
        />
        <button className="btn" type="submit">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>

        <TodosList 
          todos={todos} 
          setTodos={setTodos} 
          editTodo={editTodo}
          setEditTodo={setEditTodo} 
          setInput={setInput}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          completed={completed}
          setCompleted={setCompleted}

          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleSave={handleSave}
          handleEdit={handleEdit}
          handleFilter={handleFilter}

          active={active}
          filteredTodos={filteredTodos}
          editedText={editedText}
          onChangeInput={onChangeInput}
        />
          </div>
      </div>
    </div>
  );
};

export default Home;
