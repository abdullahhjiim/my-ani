import { Suspense } from "react";
import PopularBlogList from "./PopularBlogList";

const PopularBlog = () => {
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>
      <Suspense fallback={<p>Loading...</p>}>
        <PopularBlogList />
      </Suspense>
    </div>
  );
};

export default PopularBlog;
