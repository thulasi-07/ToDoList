import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[70vh]">
        <div className="addTodo">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input type="text" />
          <button className="bg-violet-800 hover:bg-indigo-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6">
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold">Your ToDos</h2>
     
      <div className="todos">
        <div className="todo flex">
          <div className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit enim
            laboriosam, explicabo eveniet sed nemo nobis? Possimus molestias
            magnam fugit reiciendis temporibus adipisci, rerum laborum
            voluptatibus odit animi fugiat numquam!
          </div>
          <div className="buttons">
            <button className="bg-violet-800 hover:bg-indigo-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">Edit</button>
            <button className="bg-violet-800 hover:bg-indigo-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">Delete</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
