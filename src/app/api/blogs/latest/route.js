import { blogModel } from "@/models/blog-model";
import { dbConnect } from "@/service/mongo";

export async function GET () {
    await dbConnect();

    const blogs = await blogModel.find({}).sort({createdAt : 1}).limit(5);

    return new Response(JSON.stringify({blogs}));
}