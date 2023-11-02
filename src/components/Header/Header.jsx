"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  return (
    <>
      <Link href="/">
        <div className=" bg-zinc-800 text-white text-4xl p-3 rounded shadow-md shadow-zinc-500 border-b-2 flex gap-[476px]">
          <span>Prantik's Todo List</span>
          {path === "/" ? <span>Add a Todo</span> : ""}

          {/* <span className=" pl-[200px]">hello</span> */}
        </div>
      </Link>
    </>
  );
};

export default Header;
