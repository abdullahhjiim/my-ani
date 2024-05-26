import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";
import { auth } from "../../../../../../auth";

export async function GET() {
  try {
    const session = await auth();
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await dbConnect();
    const userData = await userModel.findOne({ "email": session?.user?.email });

    const bolgs = blogModel.find({}).limit(3);

    return new Response(JSON.stringify(bolgs));
  } catch (err) {
    return new NextResponse(err.message , {status : 400})
  }
}


export async function PATCH(_request, { params }) {
    try {
        const session = await auth();
        if (!session) {
          return new NextResponse("Unauthorized", { status: 401 });
        }
    
        const blogId = params.id;

        await dbConnect();
        const userData = await userModel.findOne({ "email": session?.user?.email });
    
        console.log(userData, blogId);

        let favariteBlogIds = userData.favouriteBlogs;
        let found = favariteBlogIds.find((blog) => (blogId == blog));

        if(found) {
            favariteBlogIds = favariteBlogIds.filter((item) => (item != blogId));
        }else {
            favariteBlogIds.push(blogId);
        }

        userData.favouriteBlogs = favariteBlogIds;

        await userData.save();
    
        return new NextResponse(JSON.stringify(userData), {status : 200});

    } catch (err) {
        return new NextResponse(err.message , {status : 400})
    }
}
