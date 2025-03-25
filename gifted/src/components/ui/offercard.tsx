import React from "react";
import { Button } from "./button";
import Image from "next/image";

const OfferCard = () => {
  return (
    <div>
      <div className="flex justify-center m-24">
        <div className="">
          <div className="  overflow-hidden shadow-lg  bg-yellow-200 mr-6 flex justify-center">
            <div className="">
              <ul className="mt-16 ml-16">
                <li>
                  <h1 className="text-xl">Up to 20 % off on</h1>
                </li>
                <li>
                  <h1 className="text-4xl w-36 mt-4">BEST  PRODUCTS!</h1>
                </li>
              </ul>
              <Button className="mt-6 ml-16">SHOP NOW</Button>
            </div>
            <Image
              className=""
              src={"/giftcard.png"}
              width={700}
              height={580}
              alt="img"
            />
          </div>
        </div>
        <div>

        <div className="  overflow-hidden shadow-lg  bg-blue-200 mr-6 flex justify-center">
            <div className="">
              <ul className="mt-16 ml-8">
                <li>
                  <h1 className="text-xl">"Best gifts come from the heart"</h1>
                </li>
                <li>
                  <h1 className="text-4xl  mt-4">FESTIVAL OFFERS !</h1>
                </li>
              </ul>
              <Button className="mt-6 ml-16">SHOP NOW</Button>
            </div>
            <Image
              className=""
              src={"/bg-6.png"}
              width={550}
              height={580}
              alt="img"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
