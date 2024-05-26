"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-2 justify-center  min-h-screen">
      <div className="flex justify-center gap-4 items-center">
      <h2>Something went wrong!</h2>
      <Link href={`/`} className="border-2 border-gray-500 px-2 py-1 rounded-md">Home</Link>
      </div>
    </div>
  );
}
