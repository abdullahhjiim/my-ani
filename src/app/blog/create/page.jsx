import { submitBlog } from "@/app/actions";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";

const CreateBlog = async () => {
  const session = await auth();

  if(!session) {
    redirect('/login');
  }

  const handleSubmit = async (formData) => {
    "use server";
    const data = {
      title : formData.get("title"),
      content : formData.get("content"),
      tags : formData.get("tags"),
    }
    const res = await submitBlog(data);

    if(res) {
      redirect('/blog');
    }
  }

  return (
    <section>
      <div className="container">
        <form action={handleSubmit} className="createBlog">
          <div className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4">
            <div className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p>Upload Your Image</p>
            </div>
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Enter your blog title"
              className="border-2 border-red-500"
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              id="tags"
              name="tags"
              required
              placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
            />
          </div>

          <div className="mb-6">
            <textarea
              id="content"
              name="content"
              required
              placeholder="Write your blog content"
              rows="8"
            ></textarea>
          </div>

          <div className="flex justify-end">
          <button
            type="submit"
            className=" bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
          >
            Create Blog
          </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateBlog;
