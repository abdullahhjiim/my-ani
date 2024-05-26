import { mostPopularBlog } from "@/app/actions";
import Link from "next/link";

const PopularBlogList = async () => {
  const blogs = await mostPopularBlog();

  return (
    <ul className="space-y-5 my-5">
      {blogs?.length == 0 && <p>No popular blogs found</p>}
      {blogs.map((item, index) => {
        return (
          <li key={index}>
            <Link
              href={`/blog/${item._id}`}
              className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer"
            >
              {item.title}
            </Link>
            <p className="text-slate-600 text-sm">
              by
              <Link href={`/blog/profile/${item.author._id}`} className="ml-2">
                {item.author?.name}
              </Link>
              <span>·</span> {item.likes?.length} Likes
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default PopularBlogList;
