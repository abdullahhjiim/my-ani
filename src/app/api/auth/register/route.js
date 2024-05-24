import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  console.log(newUser);

  try {
    await userModel.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    

    console.log("eerrorr",err);
    
    if (err.code === 11000) {
      // return res.status(400).json({ message: 'Email already exists' });
      return new NextResponse('Email already exists', {
        status: 400,
      });
    }
    
    return new NextResponse(err.message, {
      status: 500,
    });

  }
};