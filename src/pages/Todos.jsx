import React, { createRef, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "new todo 1", status: true },
    { id: 2, title: "new todo 2", status: false },
  ]);
  const inputRef = createRef();

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: todos.length + 1, title: newTodo, status: false },
    ]);
    setNewTodo("");
    inputRef.current.focus();
  };

  const updateTodoStatus = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Todos List:
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        {todos.map((todo, index) => {
          return (
            <li className="flex items-center" key={todo.id}>
              <svg
                className={`w-3.5 h-3.5 me-2 cursor-pointer ${
                  todo.status
                    ? `text-green-500 dark:text-green-400`
                    : `text-gray-500  dark:text-gray-400`
                } flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                onClick={() => updateTodoStatus(todo.id)}
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {todo.title}
            </li>
          );
        })}
      </ul>

      <div className="ml-5 mr-5 mt-10">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="enter text"
          onChange={(e) => setNewTodo(e.target.value)}
          required
          ref={inputRef}
          value={newTodo}
        />
      </div>
      <button
        type="button"
        class="mt-2 mr-5 float-right py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => addTodo()}
      >
        Add Todo
      </button>
    </>
  );
};

export default Todos;
