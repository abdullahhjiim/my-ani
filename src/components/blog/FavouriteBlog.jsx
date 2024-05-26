import { getFavouriteBlogs } from "@/app/actions";
import Link from "next/link";

const FavouriteBlog = async () => {
  const blogs = await getFavouriteBlogs();
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>

      <ul className="space-y-5 my-5">
        {blogs.map((blog) => (
          <li key={blog._id}>
            <Link href={`/blog/${blog.id}`}>
              <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                {blog.title}
              </h3>
              <p className="text-slate-600 text-sm">{blog.tags}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteBlog;
