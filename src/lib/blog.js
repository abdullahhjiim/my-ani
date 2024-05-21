import { BASE_URL } from "@/helpers/config";

export const getPopularBlog = async () => {
    try{
        const res = await fetch(`${BASE_URL}/blogs/popular`);
        return await res.json();
    }catch{
        console.log('somthing is happing');
    }
}

export const getBlogDetail = async (id) => {
    try{
        const res = await fetch(`${BASE_URL}/blogs/${id}`);
        return await res.json();
    }catch{
        console.log('somthing is happing');
    }
}