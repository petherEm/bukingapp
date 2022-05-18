import React from "react";
import Image from "next/image";

const PropertyList = () => {
  return (
    <div className="flex w-[80%] items-start justify-between gap-x-2 py-10">
      <div className="overflow-hidden rounded-lg">
        <Image 
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" 
            objectFit="cover"
            className="cursor-pointer"
            width="280"
            height="200"
        />
        <h1 className="text-2xl font-bold">Hotels</h1>
        <h2 className="text-xl text-gray-500">233 hotels</h2>
      </div>

      <div className="overflow-hidden rounded-lg">
        <Image 
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" 
            objectFit="cover"
            className="cursor-pointer"
            width="280"
            height="200"
        />
        <h1 className="text-2xl font-bold">Appartments</h1>
        <h2 className="text-xl text-gray-500">1233 appartments</h2>
      </div>

      <div className="overflow-hidden rounded-lg">
        <Image 
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" 
            objectFit="cover"
            className="cursor-pointer"
            width="280"
            height="200"
        />
        <h1 className="text-2xl font-bold">Villas</h1>
        <h2 className="text-xl text-gray-500">98 villas</h2>
      </div>

      <div className="overflow-hidden rounded-lg">
        <Image 
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" 
            objectFit="cover"
            className="cursor-pointer"
            width="280"
            height="200"
        />
        <h1 className="text-2xl font-bold">Cabins</h1>
        <h2 className="text-xl text-gray-500">233 cabins</h2>
      </div>

    </div>
  );
};

export default PropertyList;
