import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Displayoffer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
        <div className="sm:w-70 sm:h-80 md:w-120 md:h-140 bg-red-100 border border-red-100  flex flex-col justify-center items-center text-center shadow-md mx-auto">
          <Image src={'/c-img.png'} width={400} height={300} alt=""/>
          <h1 className="text-xl text-indigo-500">Flat 20 % off on flashy</h1>
          <h1>MEN'S</h1>
          <Button>SHOP NOW</Button>
        </div>

        <div className="sm:w-70 sm:h-80 md:w-120 md:h-140 bg-blue-100 border border-blue-100  flex flex-col justify-center items-center text-center shadow-md mx-auto">
          <Image src={'/c-img2.png'} width={400} height={300} alt=""/>
          <h1 className="text-xl text-indigo-500">Flat 20 % off on flashy</h1>
          <h1>MEN'S</h1>
          <Button>SHOP NOW</Button>
        </div>

        <div className="sm:w-70 sm:h-80 md:w-120 md:h-140 bg-zinc-200 border border-zinc-200  flex flex-col justify-center items-center text-center shadow-md mx-auto">
          <Image src={'/c-img.png'} width={400} height={300} alt=""/>
          <h1 className="text-xl text-indigo-500">Flat 20 % off on flashy</h1>
          <h1>MEN'S</h1>
          <Button>SHOP NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default Displayoffer;
