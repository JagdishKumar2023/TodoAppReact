import React from "react";

export const Todos = ({ todos, setTodos }) => {
  const handleClick = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (id !== todo.id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const handleDelete = (id) => {
    let updatedTodo = todos.filter((todo) => {
      if (id !== todo.id) {
        return todo;
      }
    });
    setTodos(updatedTodo);
  };

  console.log(todos);

  return (
    <div className="tableContainer">
      <table id="todoTable">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Todo</th>
            <th>status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, idx) => {
            <tr key={todo.id}>
              <td>{idx + 1}</td>
              <td>{todo.todo}</td>
              <td onClick={() => handleClick(todo.id)}>
                {" "}
                {todo.isCompleted ? "completed" : "pending"}
              </td>
              <td onClick={() => handleDelete(todo.id)}>❌</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};
