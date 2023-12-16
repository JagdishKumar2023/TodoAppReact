import React from "react";
import { useState } from "react";

export const Todos = ({ todos, setTodos, handleClick, handleDelete }) => {
  const [count, setCount] = useState(1);

  // to delete:-

  console.log(todos);

  return (
    <div className="tableContainer">
      <table id="todoTable">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Todo</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, idx) => (
            <tr key={todo.id}>
              <td>{idx + 1}.</td>
              <td>{todo.todo}</td>
              <td onClick={() => handleClick(todo.id)}>
                {todo.isCompleted ? "completed" : "pending"}
              </td>
              <td onClick={() => handleDelete(todo.id)}>❌</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
