"use client";
import { signOut } from "next-auth/react";
const Logout = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: "http://localhost:1111/login" });
  };
  return (
    <li>
      <button
        onClick={handleSignOut}
        className="text-white/50 hover:text-white transition-all duration-200"
      >
        Logout
      </button>
    </li>
  );
};

export default Logout;
