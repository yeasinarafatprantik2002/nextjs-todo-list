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
      <div className="flex justify-center ">
        <p className=" border-2 border-white text-4xl font-bold m-9 p-4 rounded shadow-zinc-500 shadow-md">
          Update Todo
        </p>
      </div>
      <form className=" flex mt-8 items-center justify-center gap-4 text-black">
        <input
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          type="text"
          className="  shadow-zinc-500 shadow-md border-2 text-2xl border-white my-3 p-2 w-1/3 rounded"
          placeholder="Enter Title"
        />
        <input
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          type="text"
          className="  shadow-zinc-500 shadow-md border-2 text-2xl border-white my-3 p-2 w-1/3 rounded"
          placeholder="Enter Description"
        />
        <UpdateBtn todoId={params.id} updateTodo={updateTodo} />
        <Link href="/">
          <button className=" bg-green-500 text-white p-2 rounded shadow-zinc-500 shadow-md">
            Home
          </button>
        </Link>
      </form>
    </>
  );
};

export default updateTodoPage;
