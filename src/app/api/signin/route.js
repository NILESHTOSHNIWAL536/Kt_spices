// src/app/api/signin/route.js
import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import User from "../../../models/users";
import { generateToken, verifyToken } from "../../../utils/jwt";
export async function GET(request) {
  try {
    await connectDB();
    const users = await User.find({});
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {}
}

export async function POST(request) {
  try {
    await connectDB();

    const { name, mobileNumber } = await request.json();
    console.log({name, mobileNumber});
    if (!name || !mobileNumber) {
      return NextResponse.json(
        { message: "Name and Mobile Number are required" },
        { status: 400 }
      );
    }
    var existingUser = await User.findOne({ name, mobileNumber });
    console.log(existingUser);

     if (!existingUser) {
        existingUser = await User.create({ name, mobileNumber });
        console.log("✅ New user added:", newUser);
      } else {
        console.log("ℹ️ User already exists:", existingUser);
      }

    // if (!newUser) throw Error();
    var token = generateToken({ id: existingUser._id });
    const response = NextResponse.json(
      { message: "Login successful", user: existingUser, token },
      { status: 200 }
    );
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    });

    return response;
  } catch (error) {
    console.error("❌ Error saving user:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
