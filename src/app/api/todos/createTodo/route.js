import { connect } from "@/dbConfig/dbConfig";
import Todo from "@/models/todoModel";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { title, description } = reqBody;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Please provide all fields" },
        { status: 400 },
      );
    }

    let todo = new Todo({
      title,
      description,
    });

    await todo.save();

    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
