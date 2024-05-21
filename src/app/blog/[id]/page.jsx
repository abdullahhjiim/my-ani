import BlogComments from "@/components/blog/BlogComments";
import { formatHumanReadableDate } from "@/helpers/utility";
import { getBlogDetail } from "@/lib/blog";

/* eslint-disable @next/next/no-img-element */
const SingleBlog = async ({ params }) => {
  const data = await getBlogDetail(params.id);
  let imgNameList = [
    "React-Roadmap.jpg",
    "taiulwind-cn-thumb.jpg",
    "Underrated.jpg",
  ];
  let image = imgNameList[data.likes.length % 3];

  console.log(typeof data?.tags);

  return (
    <section>
      <div class="container text-center py-8">
        <h1 class="font-bold text-3xl md:text-5xl">{data?.title}</h1>
        <div class="flex justify-center items-center my-4 gap-4">
          <div class="flex items-center capitalize space-x-2">
            <div class="avater-img bg-indigo-600 text-white">
              <span class="">
                {data.author.avatar[0] ?? data.author.firstName[0]}
              </span>
            </div>
            <h5 class="text-slate-500 text-sm">
              {data.author.firstName} {data.author.lastName}
            </h5>
          </div>
          <span class="text-sm text-slate-700 dot">
            {formatHumanReadableDate(new Date(data.createdAt))}
          </span>
          <span class="text-sm text-slate-700 dot">
            {data.likes.length} Likes
          </span>
        </div>
        <img
          class="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
          src={`/assets/blogs/${image}`}
          alt=""
        />

        <ul class="tags">
          {data.tags.split(",").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div class="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
          <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
        </div>
      </div>
      <BlogComments comments={data?.comments} />
    </section>
  );
};

export default SingleBlog;
