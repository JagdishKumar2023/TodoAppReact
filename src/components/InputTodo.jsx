import React, { useState, useRef } from "react";
import { Todos } from "./Todos";

export const InputTodo = () => {
  const [inputTodo, setInputTodo] = useState("");

  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  // add todo:-
  const handleAddTodo = () => {
    setTodos((prev) =>
      setTodos([
        ...prev,
        { id: Date.now(), todo: inputTodo, isCompleted: false },
      ])
    );

    setInputTodo("");

    inputRef.current.focus();
  };

  // update status:-
  const handleClick = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  // delete todo:-
  const handleDelete = (id) => {
    let updatedTodo = todos.filter((todo) => {
      if (id !== todo.id) {
        return todo;
      }
    });
    setTodos(updatedTodo);
  };

  return (
    <div>
      <div className="inputTodo">
        <input
          id="InputTag"
          ref={inputRef}
          type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          placeholder="enter todo"
        />
        <button id="AddBtn" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <Todos
        todos={todos}
        setTodos={setTodos}
        handleClick={handleClick}
        handleDelete={handleDelete}
      />
    </div>
  );
};
