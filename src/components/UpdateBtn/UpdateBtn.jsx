import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UpdateBtn = ({ todoId, updateTodo }) => {
  const router = useRouter();
  let updateTodoHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/todos/updateTodo/?id=${todoId}`, updateTodo);
      toast.success("Todo Updated");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={updateTodoHandler}
      className=" bg-blue-500 text-white p-2 rounded shadow-gray-400 shadow-md">
      Update
    </button>
  );
};

export default UpdateBtn;
