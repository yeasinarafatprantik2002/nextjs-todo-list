import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Todo from "@/models/todoModel";

connect();

export async function PUT(request) {
  const reqBody = await request.json();
  const { isCompleted } = reqBody;
  const id = request.nextUrl.searchParams.get("id");
  const todo = await Todo.findById(id);
  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }
  todo.isCompleted = isCompleted;
  await todo.save();
  return NextResponse.json(todo, { status: 200 });
}
