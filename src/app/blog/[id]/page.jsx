import { blogDetail } from "@/app/actions";
import BlogComments from "@/components/blog/BlogComments";
import FlottingButton from "@/components/blog/FlottingButton";
import { formatHumanReadableDate } from "@/helpers/utility";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const SingleBlog = async ({ params }) => {
  const data = await blogDetail(params.id);
  let imgNameList = [
    "React-Roadmap.jpg",
    "taiulwind-cn-thumb.jpg",
    "Underrated.jpg",
  ];
  let image = imgNameList[data.likes.length % 3];

  return (
    <section>
      <div className="container text-center py-8">
        <h1 className="font-bold text-3xl md:text-5xl">{data?.title}</h1>
        <div className="flex justify-center items-center my-4 gap-4">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              <Link href={`/blog/profile/${data.author._id}`}>
                <span className="">{data.author.name[0]}</span>
              </Link>
            </div>
            <Link href={`/blog/profile/${data.author._id}`}><h5 className="text-slate-500 text-sm">{data.author.name}</h5></Link>
          </div>
          <span className="text-sm text-slate-700 dot">
            {formatHumanReadableDate(new Date(data.createdAt))}
          </span>
          <span className="text-sm text-slate-700 dot">
            {data.likes.length} Likes
          </span>
        </div>
        <img
          className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
          src={`/assets/blogs/${image}`}
          alt=""
        />

        <ul className="tags">
          {data.tags.split(",").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
          <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
        </div>
      </div>
      <BlogComments comments={data?.comments} blogId={params.id} />
      <FlottingButton blog={data} />
    </section>
  );
};

export default SingleBlog;
