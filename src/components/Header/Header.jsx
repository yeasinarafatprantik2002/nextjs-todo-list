import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Link href="/">
        <h1 className=" bg-zinc-800 text-white text-4xl p-3 rounded shadow-md shadow-zinc-500 border-b-2">
          Prantik's Todo List
        </h1>
      </Link>
    </>
  );
};

export default Header;
