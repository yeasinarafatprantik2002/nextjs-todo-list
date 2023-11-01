"use client";
import axios from "axios";

import React, { useState, useEffect } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("/api/todos/getTodo");

        setTodos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, [todos]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(todo);
      await axios.post("/api/todos/createTodo", todo);
      setTodo({
        title: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className=" bg-black text-white text-4xl p-3">Prantik's Todo List</h1>
      <form
        onSubmit={handleSubmit}
        className="flex mt-8 items-center justify-center gap-4">
        <input
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          type="text"
          className="border-2 text-2xl border-black my-3 p-2 w-1/3"
          placeholder="Enter Title"
        />
        <input
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          type="text"
          className="border-2 text-2xl border-black my-3 p-2 w-1/3"
          placeholder="Enter Description"
        />
        <button
          className="bg-black text-white p-3 rounded font-bold"
          type="submit">
          Add Task
        </button>
      </form>
      <div className="flex justify-center ">
        <p className=" text-4xl font-bold m-9">
          {todos.length > 0 ? "Todo Lists" : "No Todo Added"}
        </p>
      </div>
      <div className=" flex items-center justify-center ">
        <div className=" border-2 border-black p-10 flex flex-col gap-4 items-center w-[1000px] h-[600px] overflow-y-scroll">
          {todos.map((todo) => {
            return (
              <div key={todo._id} className=" border-2 border-black p-5 w-full">
                <h1 className="text-2xl font-bold">{todo.title}</h1>
                <p className="text-xl">{todo.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
