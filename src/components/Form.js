import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          value={inputText}
          type="text"
          onChange={inputTextHandler}
          className="todo-input"
        />
        <button
          type="submit"
          onClick={submitTodoHandler}
          className="todo-button"
        >
          <i class="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all"> All </option>
            <option value="completed"> completed </option>
            <option value="uncompleted"> uncompleted </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
