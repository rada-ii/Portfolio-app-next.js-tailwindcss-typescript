import React from "react";
import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";
import Message from "../../models/Message";

export async function POST(req: NextRequest, res: NextResponse) {
  const MONGODB_URI =
    "mongodb+srv://portfolio-user:b3xUaKZhq1tzlAzn@cluster0.u0smj4y.mongodb.net/";

  let client;

  try {
    client = await mongoose.connect(MONGODB_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("There was an error connection to the DB", error);
  }

  const data = await req.json();

  const { name, email, company, message } = data;

  if (
    !name ||
    !company ||
    !message ||
    !email ||
    !email.includes("@") ||
    message.trim() === "" ||
    name.trim() === ""
  ) {
    NextResponse.json(
      { message: "Invalid input - fill all the fields" },
      {
        status: 422,
      }
    );
    return;
  }

  const newData = {
    ...data,
    date: new Date(),
  };

  try {
    await Message.create(newData);
    console.log("Message Sent");
    return NextResponse.json(
      { message: "Message sent" },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log("Message couldn't be sent", error);
    return NextResponse.json(
      { message: "Error sending the message" },
      {
        status: 500,
      }
    );
  }
}
