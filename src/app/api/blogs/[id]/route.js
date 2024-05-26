import { blogModel } from "@/models/blog-model";
import { dbConnect } from "@/service/mongo";

export async function GET(request, {params}) {
    const id = params.id;
    await dbConnect();

    const blogs = await blogModel.findById({_id: id});

    return new Response(JSON.stringify(blogs));
}

export async function PUT(request, {params}) {
    const id = params.id;
    await dbConnect();

    const blogData = await request.json();

    const blog = await blogModel.findByIdAndUpdate({_id:id}, blogData, {
        runValidators: true,
      });

    return new Response(JSON.stringify(blog), {status: 201});
}

export async function DELETE(request, {params}) {
    const id = params.id;
    await dbConnect();

    await blogModel.findByIdAndDelete({_id:id});

    return new Response(JSON.stringify({message : 'Blog Deleted successfully'}), {status: 201});
}

