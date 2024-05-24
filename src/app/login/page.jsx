"use client";
import { dbConnect } from "@/service/mongo";
import { useSession } from "next-auth/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "../actions";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const router = useRouter();
  const [session, loading] = useSession();

  console.log(session, loading);

  async function onHanldeSubmit(e) {
    e.preventDefault();

    const data = {
      email: formData.email,
      password: formData.password,
    };
    console.log(data);
    await dbConnect();
    try {
      const response = await login(data);
      console.log(response);
      if (!!response.error) {
        setError(response.error);
      } else {
        // revalidatePath("/blog");
        router.push("/blog");
      }
    } catch (err) {
      setError(err.message);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="container h-[100vh]">
      <div className="w-full md:w-1/2 mx-auto bg-[#030317] py-32 rounded-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form action="" onSubmit={onHanldeSubmit}>
          <div className="mb-6">
            <label for="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label for="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            >
              Login
            </button>
          </div>
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/registration"
              className="text-indigo-600 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
