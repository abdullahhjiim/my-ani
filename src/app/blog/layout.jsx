import BlogFooter from "@/components/blog/BlogFooter";
import BlogHeader from "@/components/blog/BlogHeader";

const BlogLayout = ({ children }) => {
  return (
    <div className="bg-[#030317] text-white">
      <BlogHeader />
      <main>{children}</main>
      <BlogFooter />
    </div>
  );
};
export default BlogLayout;
