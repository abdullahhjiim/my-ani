import BlogList from "@/components/blog/BlogList";
import FavouriteBlog from "@/components/blog/FavouriteBlog";
import PopularBlog from "@/components/blog/PopularBlog";
import { auth } from "../../../auth";

/* eslint-disable @next/next/no-img-element */
const Blog = async () => {
  const session = await auth();
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <BlogList />

          <div className="md:col-span-2 h-full w-full space-y-5">
            <PopularBlog />
            {session?.user && <FavouriteBlog />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
