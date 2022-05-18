import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import MailList from "../components/MailList";

const hotel = () => {
  const photos = [
    {
      id: 1,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      id: 2,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      id: 3,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      id: 4,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      id: 5,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      id: 6,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  return (
    <div>
      <Header type="list" />
      <div className="flex flex-col w-full justify-center items-center mb-40">
        <div className="flex flex-col w-[80%]">
          <div className="flex flex-col w-full gap-y-2 mt-8">
            <h1 className="text-3xl font-bold">Grand Hotel</h1>
            <div className="flex items-center gap-x-2">
              <FaMapMarkerAlt />
              <span>Elton St 125 New York</span>
            </div>
            <div className="flex flex-col mb-4">
              <span className="text-blue-400">
                Excellent location - 500m from center!
              </span>
              <span className="text-green-600 font-bold">
                Book a stay over EUR 114 at this property and get a free airport
                taxi
              </span>
            </div>

            <div className="flex justify-center flex-wrap gap-x-2">
              {photos.map((photo) => (
                <div key={photo.id}>
                  <Image
                    src={photo.src}
                    width="320"
                    height="200"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>

            {/* BIG DESCRIPTION */}
            <div className="flex justify-between gap-x-2">
              <div className="w-2/3 flex flex-col">
                <h1 className="text-2xl font-bold mt-8">
                  Stay in the heart of Krakow
                </h1>
                <p className="mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi non quis exercitationem culpa nesciunt nihil aut
                  nostrum explicabo reprehenderit optio amet ab temporibus
                  asperiores quasi cupiditate. Voluptatum ducimus voluptates
                  voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Eligendi non quis exercitationem culpa nesciunt nihil
                  aut nostrum explicabo reprehenderit optio amet ab temporibus
                  asperiores quasi cupiditate. Voluptatum ducimus voluptates
                  voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="w-1/3 flex flex-col bg-blue-300 rounded-lg text-white p-2">
                <h1 className="text-xl font-bold mt-8">
                  Perfect for a 9-night stay!
                </h1>
                <span className="mt-4">
                  Located in the real heart of Krakow, this property has an
                  excellent location score of <b>9.8</b>
                </span>
                <span className="mt-4 font-bold">
                  EUR 945 (9 nights)
                </span>
                <button className="bg-blue-700 p-2 rounded-lg mt-4 font-bold">Reserve or Book Now!</button>

              </div>
            </div>
          </div>
        </div>
      </div>
      <MailList />
    </div>
  );
};

export default hotel;
