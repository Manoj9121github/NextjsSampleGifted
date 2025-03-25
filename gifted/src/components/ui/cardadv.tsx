import React from "react";
import { Truck } from "lucide-react";
import { Clock3 } from "lucide-react";
import { PartyPopper } from "lucide-react";
import { GlobeLock } from "lucide-react";

const Cardadv = () => {
  return (
    <div>
      <div className="flex justify-around m-10">
        <div className="text-center w-3xl m-4">
          <ul>
            <li>
              <Truck
                width={36}
                height={36}
                color="indigo"
                className="mx-auto "
              />
            </li>

            <li>
              <h1 className="text-3xl mt-2">Free Shipping</h1>
            </li>

            <li>
              <h1 className="text-xl  text-center">
                Enjoy free shipping on all your orders.
              </h1>
            </li>
          </ul>
        </div>

        <div className="text-center w-3xl m-4  ">
          <ul>
            <li>
              <Clock3
                width={36}
                height={36}
                color="indigo"
                className="mx-auto"
              />
            </li>

            <li>
              <h1 className="text-3xl mt-2">24/7 Support</h1>
            </li>

            <li>
              <h1 className="text-xl  text-center">
                Reach out to us anytime, We are at your service.
              </h1>
            </li>
          </ul>
        </div>

        <div className="text-center w-3xl m-4 ">
          <ul>
            <li>
              <PartyPopper
                width={36}
                height={36}
                color="indigo"
                className="mx-auto"
              />
            </li>

            <li>
              <h1 className="text-3xl mt-2">Offer Card</h1>
            </li>

            <li>
              <h1 className="text-xl  text-center">
                Enjoy discounts using our offer cards and coupon codes.
              </h1>
            </li>
          </ul>
        </div>

        <div className="text-center w-3xl m-4 ">
          <ul>
            <li>
              <GlobeLock
                width={36}
                height={36}
                color="indigo"
                className="mx-auto"
              />
            </li>

            <li>
              <h1 className="text-3xl mt-2">Secure Payment</h1>
            </li>

            <li>
              <h1 className="text-xl  text-center">
                We provide secure payment gateways for your transactions.
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cardadv;
