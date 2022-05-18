import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="flex w-[80%] items-start justify-between gap-x-2 py-10">
      <div className="overflow-hidden rounded-lg">
        <Image 
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" 
            objectFit="cover"
           
            width="400"
            height="400"
        />
        <h1 className="text-4xl font-bold">Dublin</h1>
        <h2 className="text-xl">532 Properties</h2>
      </div>

      <div className="overflow-hidden rounded-lg">
        <Image 
            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" 
            objectFit="cover"
            
            width="400"
            height="400"
        />
        <h1 className="text-4xl font-bold">New York</h1>
        <h2 className="text-xl">2332 Properties</h2>
      </div>

      <div className="overflow-hidden rounded-lg">
        <Image 
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" 
            objectFit="cover"
            width="400"
            height="400"
        />
        <h1 className="text-4xl font-bold">Zurich</h1>
        <h2 className="text-xl">122 Properties</h2>
      </div>
    </div>
  );
};

export default Featured;
