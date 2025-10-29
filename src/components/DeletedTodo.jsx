import { useEffect, useState } from "react";
import { todoServices } from "../services/todoServices";

const DeletedTodo = () => {
  const [deletedTodo, setDeletedTodo] = useState([]);
  const deleteTo = async () => {
    try {
      const deleted = await todoServices.getDeletedTodos();
      console.log(deleted);
      
      setDeletedTodo(deleted.data);
    } catch (error) {
      console.log("error fetching", error);
    }
  };
  useEffect(()=>{deleteTo()},[])
  return (
    <div>
      <h2 className="border-b-2">Deleted Todos</h2>
      {deletedTodo.map((ele) => {
        return (
          <li key={ele.id} className="border-b py-2 ">
            {ele.todo}
          </li>
        );
      })}
    </div>
  );
};

export default DeletedTodo;
