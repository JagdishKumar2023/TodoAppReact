import React, { useState } from "react";

export const InputTodo = () => {
  const [inputTodo, setInputTodo] = useState("");

  const [todos, setTodos] = useState([]);
};

const handleAddTodo = () => {
  setTodos((prev) => setTodos([...prev, { id: Date.now(), todo: inputTodo }]));
};
