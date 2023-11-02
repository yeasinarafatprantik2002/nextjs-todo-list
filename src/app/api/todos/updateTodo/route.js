import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Todo from "@/models/todoModel";

connect();

export async function PUT(request) {
  const reqBody = await request.json();
  const { title, description } = reqBody;
  const id = request.nextUrl.searchParams.get("id");
  console.log(id);
  const todo = await Todo.findById(id);
  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }
  todo.title = title;
  todo.description = description;
  await todo.save();
  return NextResponse.json(todo, { status: 200 });
}
