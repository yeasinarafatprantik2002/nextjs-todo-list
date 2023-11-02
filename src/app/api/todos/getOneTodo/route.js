import { connect } from "@/dbConfig/dbConfig";
import Todo from "@/models/todoModel";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const todo = await Todo.findOne({ _id: id }).exec();
    if (!todo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }
    return NextResponse.json(todo, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
