"use client";
import axios from "axios";
import DeleteBtn from "@/components/DeleteBtn/DeleteBtn";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

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
  }, [todo, todos]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/todos/createTodo", todo);
      toast.success("Todo Added");
      setTodo({
        title: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const checkBoxHandler = async (id, isCompleted) => {
    try {
      await axios.put(`/api/todos/isCompletedTodo/?id=${id}`, { isCompleted });
      if (isCompleted) {
        toast.success("Todo Uncompleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="shadow-gray-400 shadow-md bg-black text-white text-4xl p-3">
        Prantik's Todo List
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" flex mt-8 items-center justify-center gap-4">
        <input
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          type="text"
          className="  shadow-gray-400 shadow-md border-2 text-2xl border-black my-3 p-2 w-1/3 rounded"
          placeholder="Enter Title"
        />
        <input
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          type="text"
          className="  shadow-gray-400 shadow-md border-2 text-2xl border-black my-3 p-2 w-1/3 rounded"
          placeholder="Enter Description"
        />
        <button
          className="bg-black text-white p-3 rounded font-bold  shadow-gray-400 shadow-md"
          type="submit">
          Add Todo
        </button>
      </form>
      <div className="flex justify-center ">
        <p className=" border-2 border-black text-4xl font-bold m-9 p-4 rounded shadow-gray-400 shadow-md">
          {todos.length > 0 ? "Todo Lists" : "No Todo Added"}
        </p>
      </div>
      <div className=" flex items-center justify-center">
        <div className=" border-2 border-black p-10 flex flex-col gap-4 items-center w-[1000px] h-[600px] overflow-y-scroll  shadow-gray-500 shadow-md">
          {todos.map((todo) => {
            return (
              <React.Fragment key={todo._id}>
                <div className="  shadow-gray-400 shadow-md border-2 border-black p-5 w-full flex flex-col items-start justify-center">
                  <h1 className="text-2xl font-bold">
                    <span className="m-2">
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          checkBoxHandler(todo._id, e.target.checked)
                        }
                        checked={todo.isCompleted}
                      />
                    </span>
                    Title: {todo.title}.
                  </h1>
                  <p className="text-xl "><span className="mr-2"></span>Description: {todo.description}</p>
                  <div className=" mt-5 flex gap-4">
                    <DeleteBtn id={todo._id} />
                    <Link href={`/updateTodoPage/${todo._id}`}>
                      <button className=" bg-blue-500 text-white p-2 rounded shadow-gray-400 shadow-md">
                        Update
                      </button>
                    </Link>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
