import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Todo from "@/models/todoModel";

connect();

export async function GET(request, context) {
  try {
    const id = context.params.id;
    if (!id) {
      return NextResponse.json({ error: "Please provide id" }, { status: 400 });
    }

    const deletedTodo = await Todo.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "Todo deleted successfully",
        deletedTodo,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
