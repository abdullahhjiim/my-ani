import Link from "next/link";

const Registration = () => {
  return (
    <section class="container">
      <div class="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
        <h2 class="text-2xl font-bold mb-6">Register</h2>
        <form action="" autocomplete="off">
          <div class="mb-6">
            <label for="firstName" class="block mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              class="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div class="mb-6">
            <label for="lastName" class="block mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              class="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div class="mb-6">
            <button
              type="submit"
              class="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            >
              Create Account
            </button>
          </div>
          <p class="text-center">
            Already have account?{" "}
            <Link href="/blog/login" class="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Registration;
