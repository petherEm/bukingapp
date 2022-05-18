import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center bg-blue-600 h-18 w-full text-white">
      <div className="flex justify-between w-[80%] p-4">
        <span className="text-2xl font-bold"><Link href="/">BukingApp</Link></span>
        <div className="flex gap-x-2">
          <button className="bg-gray-300 text-black p-2 border-black">
            Register
          </button>
          <button className="bg-gray-300 text-black p-2 border-black">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
