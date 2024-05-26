/* eslint-disable @next/next/no-img-element */

import { getBlogList } from "@/app/actions";
import { formatHumanReadableDate } from "@/helpers/utility";
import Link from "next/link";

const BlogList = async () => {
  const blogs = await getBlogList(30);

  return (
    <div className="space-y-3 md:col-span-5">
      {blogs.length == 0 && <p className="text-center mt-8">No blogs Found..</p>}
      {blogs.map((item, index) => {
          let imgNameList = [
            "React-Roadmap.jpg",
            "taiulwind-cn-thumb.jpg",
            "Underrated.jpg",
          ];
          let image = imgNameList[index % 3];

          return (
            <div className="blog-card" key={item._id + index}>
              <Link href={`/blog/${item._id}`}>
                <img
                  className="blog-thumb"
                  src={`/assets/blogs/${image}`}
                  alt=""
                />
              </Link>
              <div className="mt-2 relative">
                <Link
                  href={`/blog/${item._id}`}
                  className="text-slate-300 text-xl lg:text-2xl"
                >
                  {item.title}
                </Link>
                <p className="mb-6 text-base text-slate-500 mt-1">
                  {item.content}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center capitalize space-x-2">
                    <div className="avater-img bg-indigo-600 text-white">
                      <span className="">{item.author?.name[0]}</span>
                    </div>

                    <div>
                      <h5 className="text-slate-500 text-sm">
                        <Link href={`/blog/profile/${item.author._id}`}>
                          {item.author?.name} 
                        </Link>
                      </h5>
                      <div className="flex items-center text-xs text-slate-700">
                        <span>
                          {formatHumanReadableDate(new Date(item.createdAt))}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm px-2 py-1 text-slate-700">
                    <span>{item.likes.length} Likes</span>
                  </div>
                </div>

                <div className="absolute right-0 top-0">
                  <button>
                    <img src="/assets/icons/3dots.svg" alt="3dots of Action" />
                  </button>

                  <div className="action-modal-container">
                    <button className="action-menu-item hover:text-lwsGreen">
                      <img src="/assets/icons/edit.svg" alt="Edit" />
                      Edit
                    </button>
                    <button className="action-menu-item hover:text-red-500">
                      <img src="/assets/icons/delete.svg" alt="Delete" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BlogList;
