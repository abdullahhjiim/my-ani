import { blogModel } from "@/models/blog-model";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { auth } from "../../../../auth";

export async function GET(request) {
  
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") ?? 1;
  const limit = searchParams.get("limit") ?? 10;

  await dbConnect();

  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);

  const blogs = await blogModel
    .find({})
    .skip((pageNumber - 1) * limitNumber)
    .limit(limitNumber)
    .lean();

  const totalBlogs = await blogModel.countDocuments();
  const totalPages = Math.ceil(totalBlogs / limitNumber);


  return Response.json({
    blogs,
    currentPage: pageNumber,
    totalPages,
    totalBlogs,
  });

  // return new Response(JSON.stringify({
  //   blogs,
  //   currentPage: pageNumber,
  //   totalPages,
  //   totalBlogs,
  // }), {status : 200})
}

export async function POST(request) {
  const session = await auth();
  
  const body = await request.json();

  await dbConnect();

  const userData = await userModel.findOne({"email" : session?.user?.email}).lean();


  body.author = {
    name : userData?.name,
    _id : userData?._id
  }

  const blogs = await blogModel
    .create(body);
    
  return new Response(JSON.stringify({body}), {status : 201})
}
