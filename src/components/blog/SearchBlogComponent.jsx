"use client";
import { prepareContent } from "@/helpers/utility";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/* eslint-disable @next/next/no-img-element */
const SearchBlogComponent = () => {
  const searchParams = useSearchParams();
  const searchInputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("query")) {
      setSearchQuery(searchParams.get("query"));
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchInputRef]);

  useEffect(() => {
    const getSearchData = async (queryStr) => {
      const res = await fetch(`/api/blogs/search?query=${queryStr}`, {
        method: "GET",
      });
      const data = await res.json();
      setSearchData(data.blogs);
    };

    getSearchData(query);
  }, [query]);

  function debounce(func, delay) {
    let timeout = null;
    return (...args) => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        func(...args);
        timeout = null;
      }, delay);
    };
  }

  const fetchSuggestions = debounce((query) => {
    setQuery(query);
  }, 700);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    fetchSuggestions(e.target.value);
  };

  return (
    <section class="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
      <div class="relative w-6/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
        <div>
          <h3 class="font-bold text-xl pl-2 text-slate-400 my-2">
            Search for Your Desire Blogs
          </h3>
          <input
            type="text"
            ref={searchInputRef}
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Start Typing to Search"
            class="w-full bg-transparent p-2 text-base text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600"
          />
        </div>

        {searchData.length > 0 && (
          <div class="">
            <h3 class="text-slate-400 font-bold mt-6">Search Results</h3>
            <div class="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
              {searchData.map((blog) => {
                return (
                  <div class="flex gap-6 py-2 cursor-pointer" onClick={()=> router.push(`/blog/${blog._id}`)} key={blog._id}>
                    <img
                      class="h-28 object-contain"
                      src="/assets/blogs/taiulwind-cn-thumb.jpg"
                      alt=""
                    />
                    <div class="mt-2">
                      <h3 class="text-slate-300 text-xl font-bold">
                        {blog.title}
                      </h3>

                      <p class="mb-6 text-sm text-slate-500 mt-1">
                        {prepareContent(blog.content)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <Link href="/blog">
          <img
            src="/assets/icons/close.svg"
            alt="Close"
            class="absolute right-2 top-2 cursor-pointer w-8 h-8"
          />
        </Link>
      </div>
    </section>
  );
};

export default SearchBlogComponent;
