import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HeroNavbar = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-blue-500 bg-stripes flex justify-between">
        <div>
          <ul className="w-3xl ml-24 mt-24">
            <li className="">
              <h1 className="p-6 text-xl text-indigo-950">
                30% Off on Festive Articles
              </h1>
            </li>
            <li>
              <h1 className=" p-6 text-5xl text-indigo-950">COLLECTIONS !!</h1>
            </li>
            <li>
              <h1 className="p-6 text-2xl text-indigo-950">
                Enhance the visual impression of your face to multiple levels.
                Compare our styles on various faces- Quality Promised.
              </h1>
            </li>
            <Button className="p-6 ml-6 bg-indigo-950 ">SHOP NOW</Button>
          </ul>
        </div>
        <div>
          
            <Image className="mr-3" src={'/bg-1.jpg'} width={1000} height={1000} alt="img"/>
          
        </div>
      </div>
    </div>
  );
};

export default HeroNavbar;
