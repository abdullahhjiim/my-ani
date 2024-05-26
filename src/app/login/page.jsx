"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "../actions";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  async function onHanldeSubmit(data) {

    try {
      setLoading(true);
      const response = await login(data);
      if (!!response.error) {
        setError(response.error);
      } else {
        router.push("/");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onHanldeSubmit({email, password})
    }
  };

  return (
    <section className="container min-h-screen">
      <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-24">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {error && (
            <div className="text-xl text-red-500 text-center">{error}</div>
          )}
        <form action="" onSubmit={handleSubmit}>

          <div className="mb-6">
            <label for="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
                onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
            {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}

          </div>
          <div className="mb-6">
            <label for="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
                onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
            {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}

          </div>
          <div className="mb-6">
            <button
              type="submit"
              disabled={loading}
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
