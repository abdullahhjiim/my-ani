/* eslint-disable @next/next/no-img-element */
const searchPage = () => {
  return (
    <section class="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
      <div class="relative w-6/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
        <div>
          <h3 class="font-bold text-xl pl-2 text-slate-400 my-2">
            Search for Your Desire Blogs
          </h3>
          <input
            type="text"
            placeholder="Start Typing to Search"
            class="w-full bg-transparent p-2 text-base text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600"
          />
        </div>

        <div class="">
          <h3 class="text-slate-400 font-bold mt-6">Search Results</h3>
          <div class="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
            <div class="flex gap-6 py-2">
              <img
                class="h-28 object-contain"
                src="/assets/blogs/taiulwind-cn-thumb.jpg"
                alt=""
              />
              <div class="mt-2">
                <h3 class="text-slate-300 text-xl font-bold">
                  Style your components with TailwindCSS
                </h3>

                <p class="mb-6 text-sm text-slate-500 mt-1">
                  Aenean eleifend ante maecenas pulvinar montes lorem et pede
                  dis dolor pretium donec dictum. Vici consequat justo enim.
                  Venenatis eget adipiscing luctus lorem.
                </p>
              </div>
            </div>

            <div class="flex gap-6 py-2">
              <img
                class="h-28 object-contain"
                src="/assets/blogs/taiulwind-cn-thumb.jpg"
                alt=""
              />
              <div class="mt-2">
                <h3 class="text-slate-300 text-xl font-bold">
                  Style your components with TailwindCSS
                </h3>

                <p class="mb-6 text-sm text-slate-500 mt-1">
                  Aenean eleifend ante maecenas pulvinar montes lorem et pede
                  dis dolor pretium donec dictum. Vici consequat justo enim.
                  Venenatis eget adipiscing luctus lorem.
                </p>
              </div>
            </div>

            <div class="flex gap-6 py-2">
              <img
                class="h-28 object-contain"
                src="/assets/blogs/taiulwind-cn-thumb.jpg"
                alt=""
              />
              <div class="mt-2">
                <h3 class="text-slate-300 text-xl font-bold">
                  Style your components with TailwindCSS
                </h3>

                <p class="mb-6 text-sm text-slate-500 mt-1">
                  Aenean eleifend ante maecenas pulvinar montes lorem et pede
                  dis dolor pretium donec dictum. Vici consequat justo enim.
                  Venenatis eget adipiscing luctus lorem.
                </p>
              </div>
            </div>
            <div class="flex gap-6 py-2">
              <img
                class="h-28 object-contain"
                src="/assets/blogs/taiulwind-cn-thumb.jpg"
                alt=""
              />
              <div class="mt-2">
                <h3 class="text-slate-300 text-xl font-bold">
                  Style your components with TailwindCSS
                </h3>

                <p class="mb-6 text-sm text-slate-500 mt-1">
                  Aenean eleifend ante maecenas pulvinar montes lorem et pede
                  dis dolor pretium donec dictum. Vici consequat justo enim.
                  Venenatis eget adipiscing luctus lorem.
                </p>
              </div>
            </div>
            <div class="flex gap-6 py-2">
              <img
                class="h-28 object-contain"
                src="/assets/blogs/taiulwind-cn-thumb.jpg"
                alt=""
              />
              <div class="mt-2">
                <h3 class="text-slate-300 text-xl font-bold">
                  Style your components with TailwindCSS
                </h3>

                <p class="mb-6 text-sm text-slate-500 mt-1">
                  Aenean eleifend ante maecenas pulvinar montes lorem et pede
                  dis dolor pretium donec dictum. Vici consequat justo enim.
                  Venenatis eget adipiscing luctus lorem.
                </p>
              </div>
            </div>
          </div>
        </div>

        <a href="/blog">
          <img
            src="/assets/icons/close.svg"
            alt="Close"
            class="absolute right-2 top-2 cursor-pointer w-8 h-8"
          />
        </a>
      </div>
    </section>
  );
};

export default searchPage;