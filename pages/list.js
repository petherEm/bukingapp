import React from "react";
import Header from "../components/Header";
import SearchItem from "../components/SearchItem";

const list = () => {
  return (
    <>
      <Header type="list" />

      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex w-[80%]">
          <div className="w-1/3 bg-yellow-400 m-4 rounded-lg h-max sticky top-0">
            {/* LEFT BAR, SEARCH BAR */}

            <h1 className="text-3xl font-bold p-4 text-blue-700">Search</h1>

            <div className="flex flex-col p-4">
              <label className="font-semibold text-xl">Destination</label>
              <input type="text" placeholder="  Where?" className="p-2" />
            </div>
            <div className="flex flex-col p-4">
              <label className="font-semibold text-xl">Check-in Date</label>
              <input type="text" placeholder="  When?" className="p-2" />
            </div>
            <div className="flex flex-col p-4 gap-y-2">
              <label className="font-semibold text-xl">Options</label>
              <div className="flex justify-between gap-x-2">
                <p>Min price (per night)</p>
                <input type="text" className="border-black border-2 w-14" />
              </div>
              <div className="flex justify-between gap-x-2">
                <p>Min price (per night)</p>
                <input type="text" className="border-black border-2 w-14" />
              </div>
              <div className="flex justify-between gap-x-2">
                <p>Max price (per night)</p>
                <input type="text" className="border-black border-2 w-14" />
              </div>
              <div className="flex justify-between gap-x-2">
                <p>Adult</p>
                <input type="text" className="border-black border-2 w-14" />
              </div>
              <div className="flex justify-between gap-x-2">
                <p>Children</p>
                <input type="text" className="border-black border-2 w-14" />
              </div>
              <div className="flex justify-between gap-x-2">
                <p>Room</p>
                <input type="text" className="border-black border-2 w-14" />
              </div>
              <button className="bg-blue-500 p-4 text-white text-lg mt-8">
                Search
              </button>
            </div>
          </div>

          {/* RIGHT BAR, SEARCH BAR */}

          <div className="w-2/3">
            <div className="p-4">
              <SearchItem />
            </div>
            <div className="p-4">
              <SearchItem />
            </div>
            <div className="p-4">
              <SearchItem />
            </div>
            <div className="p-4">
              <SearchItem />
            </div>
            <div className="p-4">
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default list;
