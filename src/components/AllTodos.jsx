import React, { useEffect, useState } from "react";
import { todoServices } from "../services/todoServices";
import Button from "../common/ui/Button";

const AllTodos = () => {
  const [todo, setTodo] = useState([]);
  const [deletedTodo, setDeletedTodo] = useState([]);

  const fetchTodo = async () => {
    try {
      const todos = await todoServices.getAllTodos();
      setTodo(todos.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "pending" ? "completed" : "pending";

    try {
      await todoServices.updateTodo(id, { status: newStatus });
      fetchTodo();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id, todo) => {
    setDeletedTodo(todo);
    try {
      await todoServices.postDeletedTodo(todo);
      console.log(deletedTodo);
    } catch (error) {
      console.log("failed to updated deleted todo", error);
    }
    try {
      await todoServices.deleteTodo(id);
      fetchTodo();
    } catch (error) {
      console.log("failed deleting", error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="p-4">
      <p className="border-b-2 mb-2 text-lg font-semibold">All Todos</p>

      <ul>
        {todo.map((ele) => (
          <li
            key={ele.id}
            className="flex justify-between items-center border-b py-2 gap-6"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={ele.status === "completed"}
                onChange={() => handleToggleStatus(ele.id, ele.status)}
                className="w-5 h-5 rounded-full accent-green-500 cursor-pointer"
              />
              <span
                className={
                  ele.status === "completed"
                    ? "line-through text-gray-500"
                    : "text-black"
                }
              >
                {ele.todo}
              </span>
            </div>
            <Button
              onClick={() => handleDelete(ele.id, ele)}
              label="X"
              className="bg-red-400 w-5 h-5 text-center cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTodos;
