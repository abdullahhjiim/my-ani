/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { auth } from "../../../auth";
import Logout from "../common/Logout";

const BlogHeader = async () => {
  const session = await auth();
  console.log(session);
  return (
    <header>
      <nav className="container mx-auto">
        <div>
          <Link href="/blog">
            <img className="w-32" src="/assets/logo.svg" alt="lws" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                href="/blog/create"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>
            <li>
              <Link
                href="/blog/search"
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src="/assets/icons/search.svg" alt="Search" />
                <span>Search</span>
              </Link>
            </li>
            {session.user ? (
              <li className="flex items-center">
                <Link
                  href={"/profile"}
                  className="avater-img bg-orange-600 text-white"
                >
                  <span className="">S</span>
                </Link>

                <Logout />
              </li>
            ) : (
              <li>
                <Link
                  href="/blog/login"
                  className="text-white/50 hover:text-white transition-all duration-200"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default BlogHeader;
