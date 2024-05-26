import { blogModel } from "@/models/blog-model";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";


export async function GET() {

  try {
    const session = await auth();
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await dbConnect();

    const userData = await userModel.findOne({ "email": session?.user?.email });

    console.log('sssss', userData);
    const blogs = await blogModel
      .find({ _id: { $in: userData?.favouriteBlogs } })
      .sort({ createdAt: 1 })
      .limit(5);

    return new NextResponse(JSON.stringify({blogs}));
  } catch (err) {
    return new NextResponse(err.message , {status : 400})
  }
}