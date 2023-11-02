import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const DeleteBtn = ({ id }) => {
  const deleteTodo = async (e) => {
    e.preventDefault();

    try {
      await axios.get(`/api/todos/deleteTodo/${id}`);
      toast.success("Todo Deleted");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <button
      onClick={deleteTodo}
      className=" bg-red-500 text-white p-2 rounded shadow-gray-400 shadow-md">
      Delete
    </button>
  );
};

export default DeleteBtn;
