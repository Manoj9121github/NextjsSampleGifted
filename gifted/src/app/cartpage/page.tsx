// src/app/cart/page.tsx
"use client";

import React from "react";
import { useCart } from "../CartContext/CartContext";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((acc: any, item: { price: any; }) => acc + item.price, 0).toFixed(2);

  return (
    <div className="p-6 bg-gray-200">
      <div className="flex m-2">
        <h2 className="text-3xl font-bold">Cart</h2>
        <ShoppingBag className="w-12 h-12" />
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {cart.map((item: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; image: any; price: number; }, index: React.Key | null | undefined) => (
            <div
              key={index}
              className="m-4 p-4 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-semibold m-1">{item.name}</h3>
              <Image
                className="rounded"
                src={`/${item.image}`}
                width={200}
                height={170}
                alt={`${item.name} image`} 
              />
              <p className="text-gray-700">Price: Rs{item.price.toFixed(2)}</p>
              <button 
                onClick={() => removeFromCart(index)} 
                className="mt-2 bg-orange-700 p-1 rounded text-white"
              >
                Del
              </button>
            </div>
          ))}
          <div>
            <h1 className="text-xl font-bold bg-white m-2 p-2">Total Price: Rs{totalPrice}</h1>
            <Link href={'/payment'}>
              <h1 className="text-center text-bold bg-amber-400 rounded">Proceed to payment</h1>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
