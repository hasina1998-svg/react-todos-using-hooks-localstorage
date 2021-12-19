import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //RUN ONCE WHEN THE APP start

  useEffect(() => {
    getLocalTodos();
  }, []);
  //USEEFFECT
  useEffect(() => {
    // console.log("hey");
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed ===true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // console.log(filteredTodos);
  //SAVE TO LOCAL
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div>
      <div className="App">
        <header>
          <h1> Todo List </h1>
          <Form
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setStatus={setStatus}
            status={status}
          />
          <TodoList
            filteredTodos={filteredTodos}
            todos={todos}
            setTodos={setTodos}
          />
        </header>
      </div>
    </div>
  );
}

export default App;
