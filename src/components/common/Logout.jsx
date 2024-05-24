"use client";
import { signOut } from "next-auth/react";
const Logout = () => {
  const handleLogout = () => {
    signOut({ callbackUrl: "http://localhost:1111/login" });
  };
  return (
    <button onClick={handleLogout}>
      <span className="text-white ml-2">Logout</span>
    </button>
  );
};

export default Logout;
