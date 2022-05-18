import { useState, useNavigate } from "react";
import Link from "next/link";
import {
  FaBed,
  FaTaxi,
  FaPlaneDeparture,
  FaSwimmingPool,
  FaUserCheck,
  FaCity,
  FaRegCalendarAlt,
  FaCar
} from "react-icons/fa";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { format } from "date-fns";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-blue-600 h-18 w-full text-white">
      <div className="flex w-[80%] gap-x-8 p-4">
        <div className="flex gap-x-2 items-center cursor-pointer border-white active:border-2 p-1 active:rounded-lg">
          <FaBed /> Stays
        </div>
        <div className="flex gap-x-2 items-center cursor-pointer border-white active:border-2 p-1 active:rounded-lg">
          <FaCar /> Car rentals
        </div>
        <div className="flex gap-x-2 items-center cursor-pointer border-white active:border-2 p-1 active:rounded-lg">
          <FaSwimmingPool /> Attractions
        </div>
        <div className="flex gap-x-2 items-center cursor-pointer border-white active:border-2 p-1 active:rounded-lg">
          <FaTaxi /> Airport Taxis
        </div>
      </div>

      <div className={ type === "list" ? "flex flex-col w-[80%] justify-start items-start p-4 gap-4 h-30" : "flex flex-col w-[80%] justify-start items-start p-4 gap-4 h-60"}>
        {type !== "list" && (
          <>
            <h1 className="text-4xl font-bold">
              A lifetime of discounts? It&apos;s Genius.
            </h1>
            <p className="text-xl">
              Get rewarded for your travels - unlock instant savings of{" "}
              <b>10% or more with a free Buking account.</b>
            </p>
            <button className="bg-blue-400 p-2">Sign in / Register</button>

            {/* Header search */}
            <div className="absolute -bottom-5 flex p-2 bg-white border-yellow-500 border-4">
              <div className="flex items-center text-black gap-x-2">
                <FaBed />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="outline-none"
                  onChange={e=>setDestination(e.target.value)}
                />
              </div>
              <div className="flex items-center text-black gap-x-2 cursor-pointer">
                <FaRegCalendarAlt />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="mr-4 text-gray-400"
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute top-14 z-10"
                  />
                )}
              </div>
              <div className="flex items-center text-black gap-x-2">
                <FaUserCheck />
                <span
                  className="mr-4 text-gray-400 cursor-pointer"
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>

                {openOptions && (
                  <div className="absolute top-14 bg-white h-32 w-60 shadow-lg p-4 flex flex-col justify-center gap-y-2 z-10">
                    <div className="flex justify-between items-center">
                      <span className="">Adult</span>
                      <div className="flex gap-x-2">
                        <button
                          disabled={options.adult <= 1}
                          className="bg-slate-200 px-1 text-black font-bold border-black border-[1px] disabled:cursor-not-allowed"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span>{options.adult}</span>
                        <button
                          className="bg-slate-200 px-1 text-black font-bold border-black border-[1px]"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="">Children</span>
                      <div className="flex gap-x-2">
                        <button
                          disabled={options.children <= 0}
                          className="bg-slate-200 px-1 text-black font-bold border-black border-[1px] disabled:cursor-not-allowed"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span>{options.children}</span>
                        <button
                          className="bg-slate-200 px-1 text-black font-bold border-black border-[1px]"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="mr-4">Room</span>
                      <div className="flex gap-x-2">
                        <button
                          disabled={options.room <= 1}
                          className="bg-slate-200 px-1 text-black font-bold border-black border-[1px] disabled:cursor-not-allowed"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span>{options.room}</span>
                        <button
                          className="bg-slate-200 px-1 text-black font-bold border-black border-[1px]"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="bg-blue-400 p-2"><Link href="/list">Search</Link></button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
