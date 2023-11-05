import { connect } from "@/dbConfig/dbConfig";
import Todo from "@/models/todoModel";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
  try {
    let todos = await Todo.find().sort({ createdAt: 1 });
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
