import { getProfileData } from "@/app/actions";
import { formatHumanReadableDate, prepareContent } from "@/helpers/utility";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const BlogProfile = async ({ params }) => {
  const data = await getProfileData(params.id);
  const { user, blogs } = data;

  return (
    <main class="mx-auto max-w-[1020px] py-8">
      <div class="container">
        <div class="flex flex-col items-center py-8 text-center">
          <div class="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
            <div class="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
              <span class="">{user?.name[0]}</span>
            </div>

            <button class="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80">
              <img src="/assets/icons/edit.svg" alt="Edit" />
            </button>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-white lg:text-[28px]">
              {user?.name}
            </h3>
            <p class="leading-[231%] lg:text-lg">{user?.email}</p>
          </div>

          <div class="mt-4 flex items-start gap-2 lg:mt-6">
            <div class="flex-1">
              <p class="leading-[188%] text-gray-400 lg:text-lg">{user?.bio}</p>
            </div>
            <button class="flex-center h-7 w-7 rounded-full">
              <img src="/assets/icons/edit.svg" alt="Edit" />
            </button>
          </div>
          <div class="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
        </div>

        <h4 class="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
        <div class="my-6 space-y-4">
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
                  {prepareContent(item.content)}
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
      </div>
    </main>
  );
};

export default BlogProfile;
