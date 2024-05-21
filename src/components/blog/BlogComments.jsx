const BlogComments = ({ comments }) => {
  return (
    <section id="comments">
      <div class="mx-auto w-full md:w-10/12 container">
        <h2 class="text-3xl font-bold my-8">Comments ({comments.length})</h2>
        <div class="flex items -center space-x-4">
          <div class="avater-img bg-indigo-600 text-white">
            <span class="">S</span>
          </div>
          <div class="w-full">
            <textarea
              class="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
              placeholder="Write a comment"
            ></textarea>
            <div class="flex justify-end mt-4">
              <button class="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                Comment
              </button>
            </div>
          </div>
        </div>

        {comments.map((item, index) => {
          return (
            <div class="flex items-start space-x-4 my-8" key={index}>
              <div class="avater-img bg-orange-600 text-white">
                <span class="">{item?.author.firstName[0]}</span>
              </div>
              <div class="w-full">
                <h5 class="text-slate -500 font-bold">
                  {item?.author.firstName} {item?.author.lastName}
                </h5>
                <p class="text-slate-300">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogComments;
