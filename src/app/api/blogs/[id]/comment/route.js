import { blogModel } from "@/models/blog-model";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";
import { auth } from "../../../../../../auth";

export async function POST(request, {params}){
    const session = await auth();

    if(!session?.user) {
        return new NextResponse("User not authrize", {status : 401})
    }

    try {

        await dbConnect();
        const body = await request.json();
        const userdata = await userModel.findOne({"email" : session?.user?.email});
        const author = {
            _id : userdata?._id,
            name : userdata?.name
        }

        const blogData = await blogModel.findOne({_id : params.id});


        body.author = author;
        let comments = blogData.comments;

        console.log(body, comments);
        comments.push(body)
        blogData.comments = comments;

        await blogData.save();

        return new NextResponse("Comment created successfully", {status : 201});

    } catch(err) {
        console.log("error my : ", err);
        console.log("error my : ", err.message);

        return new NextResponse(err.message, {status : 400})
    }
}