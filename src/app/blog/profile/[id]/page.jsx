/* eslint-disable @next/next/no-img-element */
const BlogProfile = ({ params }) => {
  console.log(params);
  return (
    <main class="mx-auto max-w-[1020px] py-8">
      <div class="container">
        <div class="flex flex-col items-center py-8 text-center">
          <div class="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
            <div class="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
              <span class="">S</span>
            </div>

            <button class="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80">
              <img src="/assets/icons/edit.svg" alt="Edit" />
            </button>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-white lg:text-[28px]">
              Saad Hasan
            </h3>
            <p class="leading-[231%] lg:text-lg">saadhasan@gmail.com</p>
          </div>

          <div class="mt-4 flex items-start gap-2 lg:mt-6">
            <div class="flex-1">
              <p class="leading-[188%] text-gray-400 lg:text-lg">
                Sumit is an entrepreneurial visionary known for his exceptional
                performance and passion for technology and business. He
                established Analyzen in 2008 while he was a student at
                Bangladesh University of Engineering & Technology (BUET).
                Analyzen has since become a top-tier Web and Mobile Application
                Development firm and the first Digital and Social Media
                Marketing Agency in Bangladesh.
              </p>
            </div>
            <button class="flex-center h-7 w-7 rounded-full">
              <img src="/assets/icons/edit.svg" alt="Edit" />
            </button>
          </div>
          <div class="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
        </div>

        <h4 class="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
        <div class="my-6 space-y-4">
          <div class="blog-card">
            <img class="blog-thumb" src="/assets/blogs/Underrated.jpg" alt="" />
            <div class="mt-2">
              <h3 class="text-slate-300 text-xl lg:text-2xl">
                React Fetch API
              </h3>
              <p class="mb-6 text-base text-slate-500 mt-1">
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
                dolor pretium donec dictum. Vici consequat justo enim. Venenatis
                eget adipiscing luctus lorem.
              </p>

              <div class="flex justify-between items-center">
                <div class="flex items-center capitalize space-x-2">
                  <div class="avater-img bg-indigo-600 text-white">
                    <span class="">S</span>
                  </div>

                  <div>
                    <h5 class="text-slate-500 text-sm">Saad Hasan</h5>
                    <div class="flex items-center text-xs text-slate-700">
                      <span>June 28, 2018</span>
                    </div>
                  </div>
                </div>

                <div class="text-sm px-2 py-1 text-slate-700">
                  <span>100 Likes</span>
                </div>
              </div>
            </div>
          </div>

          <div class="blog-card">
            <img class="blog-thumb" src="/assets/blogs/Underrated.jpg" alt="" />
            <div class="mt-2">
              <h3 class="text-slate-300 text-xl lg:text-2xl">
                React Fetch API
              </h3>
              <p class="mb-6 text-base text-slate-500 mt-1">
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
                dolor pretium donec dictum. Vici consequat justo enim. Venenatis
                eget adipiscing luctus lorem.
              </p>

              <div class="flex justify-between items-center">
                <div class="flex items-center capitalize space-x-2">
                  <div class="avater-img bg-indigo-600 text-white">
                    <span class="">S</span>
                  </div>

                  <div>
                    <h5 class="text-slate-500 text-sm">Saad Hasan</h5>
                    <div class="flex items-center text-xs text-slate-700">
                      <span>June 28, 2018</span>
                    </div>
                  </div>
                </div>

                <div class="text-sm px-2 py-1 text-slate-700">
                  <span>100 Likes</span>
                </div>
              </div>
            </div>
          </div>

          <div class="blog-card">
            <img class="blog-thumb" src="/assets/blogs/Underrated.jpg" alt="" />
            <div class="mt-2">
              <h3 class="text-slate-300 text-xl lg:text-2xl">
                React Fetch API
              </h3>
              <p class="mb-6 text-base text-slate-500 mt-1">
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
                dolor pretium donec dictum. Vici consequat justo enim. Venenatis
                eget adipiscing luctus lorem.
              </p>

              <div class="flex justify-between items-center">
                <div class="flex items-center capitalize space-x-2">
                  <div class="avater-img bg-indigo-600 text-white">
                    <span class="">S</span>
                  </div>

                  <div>
                    <h5 class="text-slate-500 text-sm">Saad Hasan</h5>
                    <div class="flex items-center text-xs text-slate-700">
                      <span>June 28, 2018</span>
                    </div>
                  </div>
                </div>

                <div class="text-sm px-2 py-1 text-slate-700">
                  <span>100 Likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogProfile;
