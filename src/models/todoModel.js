import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Todo = mongoose.models.todos || mongoose.model("todos", todoSchema);

export default Todo;
