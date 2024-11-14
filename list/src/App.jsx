import { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleEdit = () => {};
  const handleDelete = () => {};
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(id);
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = todos;
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo" my-5>
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-1/2"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6"
          >
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold">Your ToDos</h2>

        <div className="todos">
          {todos.map((item) => {
            return;
            <div key={todo.id} className="todo flex w-1/4 my-3 justify-between">
              <input
                name={todo.id}
                onChange={handleCheckbox}
                type="checkbox"
                value={todo.isCompleted}
                id=""
              />
              <div className={item.isCompleted ? "line-through" : ""}>
                {item.todo}
                my todo
              </div>
              <div className="buttons">
                <button
                  onClick={handleEdit}
                  className="bg-violet-800 hover:bg-indigo-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                >
                  Edit
                </button>
                <button
                  onClick={handleEdit}
                  className="bg-violet-800 hover:bg-indigo-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                >
                  Delete
                </button>
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
