import { blogModel } from "@/models/blog-model";
import { dbConnect } from "@/service/mongo";

export async function POST(request, {params}){
    await dbConnect();
    const body = await request.json();

    const blogId = params.id;
    const {isLiked, authorId} = body;

    const blog = await blogModel.findById({_id: blogId});

    let cloneblog = blog;
    let clonelikes = cloneblog.likes;

    if(isLiked) {
        clonelikes.push(authorId);
    }else {
        clonelikes = clonelikes.filter((item) => (item != authorId));
    }

    blog.likes = clonelikes;
    await blog.save();


    return new Response(JSON.stringify({blog}));

}