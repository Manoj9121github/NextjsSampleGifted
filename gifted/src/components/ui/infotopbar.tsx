import React from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const InfoMain = () => {
  return (
    <div>
      <nav className="flex justify-around bg-gray-100 p-2">
        <div className="flex m-1">
          <div className="flex">
            <Mail className="w-8 " />
            <h1 className="ml-1">info@domainname.com</h1>
          </div>
          <div className="h-full w-0.5 bg-gray-300 ml-2 mr-2"></div>
          <div>
            <div className="flex">
              <Phone className="w-6 " />
              <h1 className="ml-1">0123456789</h1>
            </div>
          </div>
        </div>
        <div></div>
      </nav>

      <div className="flex justify-center mr-8 mt-2">
        <div className="flex  ">
          <Image src={"/logoImg.jpg"} width={60} height={50} alt="img" />
          <h1 className="text-6xl  text-rose-700">Gifted!</h1>
        </div>
        <div className="flex ">
          <Input className="ml-36 mt-4" />

          <Search className="w-16 mt-5"/>
        </div>
        <div className="mt-5 ml-5 pt-1 pr-1 pl-1 rounded bg-amber-300 text-center"><Link href={'/loginpage'} className="">login here</Link></div>
      </div>

      <nav className="flex justify-center mt-5 text-white bg-indigo-950 p-4">
        <ul className="flex justify-between">
            <Link href={'/'} className="mr-8 text-xl">Home</Link>
            <Link href={'/'} className="mr-8 text-xl">Gifts & Articles</Link>
            <Link href={'/'} className="mr-8 text-xl">Festive Special</Link>
            <Link href={'/'} className="mr-8 text-xl ">Terms & Conditions</Link>
            <Link href={'/'} className="mr-8 text-xl">Contact</Link>
        </ul>

      </nav>
    </div>
  );
};

export default InfoMain;
