import React from "react";
import Image from "next/image";
import Link from "next/link";

const SearchItem = () => {
  return (
    <div className="flex justify-between border-gray-200 border-2 p-4 gap-x-2">
      <Image
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        width="350"
        height="250"
        objectFit="cover"
        className=""
      />
      <div className="flex flex-col gap-y-1">
          <h1 className="text-2xl font-bold text-blue-600"><Link href="/hotel">Tower Street Appartments</Link></h1>
          <span className="text-gray-500">500m from center</span>
          <span className="bg-green-600 text-white w-max px-1 rounded-md">Free airport taxi</span>
          <span className="font-bold">Studio Appart with Air conditioning</span>
          <span className="text-gray-600">Entire studio | 1 bathroom | 21m2 1 full bed</span>
          <span className="text-green-600 font-bold">Free cancellation</span>
          <span className="text-green-600">You can cancel later, so lock this price today!</span>
      </div>
      <div className="flex flex-col justify-between">
          <div className="flex items-center justify-between">
              <span className="font-semibold">Excellent</span>
              <button className="bg-blue-500 text-white p-1">8.9</button>
          </div>
          <div className="flex flex-col items-end">
              <span className="font-semibold text-2xl">€ 123</span>
              <span className="text-gray-400">Includes taxes and fees</span>
              <button className="bg-slate-200 px-4 py-1 border-black ring-2 rounded-md"><Link href="/hotel">See availability</Link></button>
          </div>
          
      </div>

    </div>
  );
};

export default SearchItem;
