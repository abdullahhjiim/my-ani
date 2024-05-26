import BlogCommentForm from "./BlogCommentForm";

const BlogComments = ({ comments, blogId }) => {
  return (
    <section id="comments">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">Comments ({comments.length})</h2>
        <div className="flex items -center space-x-4">
          <div className="avater-img bg-indigo-600 text-white">
            <span className="">S</span>
          </div>
          <BlogCommentForm blogId={blogId} />
        </div>

        {comments.map((item, index) => {
          return (
            <div className="flex items-start space-x-4 my-8" key={index}>
              <div className="avater-img bg-orange-600 text-white">
                <span className="">{item?.author.name[0]}</span>
              </div>
              <div className="w-full">
                <h5 className="text-slate -500 font-bold">
                  {item?.author.name} 
                </h5>
                <p className="text-slate-300">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogComments;
