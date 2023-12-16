import React, { useState, useRef } from "react";
import { Todos } from "./Todos";

export const InputTodo = () => {
  const [inputTodo, setInputTodo] = useState("");

  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

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
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
};
