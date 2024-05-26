import { blogModel } from "@/models/blog-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {

   const { searchParams } = new URL(request.url);
   const query = searchParams.get("query") ?? null;

    await dbConnect();

    console.log(query);

    if(query) {
        const blogs = await blogModel.find({
            $or: [
              { title: { $regex: query, $options: "i" } },
              { content: { $regex: query, $options: "i" } },
            ],
          });
      
          return new NextResponse(JSON.stringify({ blogs }, { status: 200 }));
    }else {
        return new NextResponse(JSON.stringify({ blogs : [] }, { status: 200 }));
    }
    


  } catch (err) {
    return new NextResponse(err, { status: 400 });
    // return new NextResponse("No record found", { status: 400 });
  }
}
