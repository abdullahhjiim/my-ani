/* eslint-disable @next/next/no-img-element */

import BlogList from "@/components/blog/BlogList";
import SearchBlogComponent from "@/components/blog/SearchBlogComponent";


const searchPage = () => {
  
  return (
    <div className="">
      <div className="container mx-auto">
        <BlogList />
      </div>
      <SearchBlogComponent />
    </div>
  );
};

export default searchPage;
