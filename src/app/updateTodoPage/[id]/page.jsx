"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateBtn from "@/components/UpdateBtn/UpdateBtn";
import Link from "next/link";

const updateTodoPage = ({ params }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const updateTodo = {
    title: todo.title,
    description: todo.description,
  };
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get(`/api/todos/getOneTodo/?id=${params.id}`);
        setTodo({
          title: res.data.title,
          description: res.data.description,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodo();
  }, [params.id]);

  return (
    <>
      <Link href="/">
        <h1 className="shadow-gray-400 shadow-md bg-black text-white text-4xl p-3">
          Prantik's Todo List
        </h1>
      </Link>
      <div className="flex justify-center ">
        <p className=" border-2 border-black text-4xl font-bold m-9 p-4 rounded shadow-gray-400 shadow-md">
          Update Todo
        </p>
      </div>
      <form className=" flex mt-8 items-center justify-center gap-4">
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
        <UpdateBtn todoId={params.id} updateTodo={updateTodo} />
      </form>
    </>
  );
};

export default updateTodoPage;
