/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { auth } from "../../../auth";
import Logout from "./Logout";

const Header = async () => {
  const session = await auth();
  return (
    <header className="sticky top-0 ">
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
            <li>
              <Link
                href="/blog"
                className="flex items-center gap-2 cursor-pointer"
              >
                Blog
              </Link>
            </li>
            
            {session && session.user ? (<>
              <Logout />
            <li className="flex items-center">
              <div className="avater-img bg-orange-600 text-white">
                <span className="">{session.user.name[0]}</span>
              </div>

              <Link href="/profile">
                <span className="text-white ml-2">{session.user.name}</span>
              </Link>
            </li></>) : (<li>
              <Link
                href="/login"
                className="text-white/50 hover:text-white transition-all duration-200"
              >
                Login
              </Link>
            </li>)}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
