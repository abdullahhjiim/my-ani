"use client";

const BlogCommentForm = ({ blogId }) => {
  console.log(blogId);
  const onSubmit = async (formData) => {
    const data = { content: formData.get("content") };
    try {
      const response = await fetch(`/api/blogs/${blogId}/comment`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form action={onSubmit} className="w-full">
      <div class="w-full">
        <textarea
          class="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
          placeholder="Write a comment"
          name="content"
        ></textarea>
        <div class="flex justify-end mt-4">
          <button class="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
            Comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default BlogCommentForm;
