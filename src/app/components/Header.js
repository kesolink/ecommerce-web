import React from "react";
import { ShoppingCartIcon } from "@heroicons/React/24/outline";
import Link from "next/link";




function Header() {
  return (
    <header className="bg-white py-4 drop-shadow-md">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
        {/* left part */}
        <div>
          <span className="text-xl cursor-pointer font-bold ml-2 ">
            Ecommerce
            <span className="text-blue-500 font-old">Market</span>
          </span>
        </div>
        {/* middle part */}
        <div className="hidden sm:flex flex-row space-x-4">
            <p>offer</p>
            <p>product</p>
            <p>Deals</p>
        </div>
        {/* right part */}
        <div className="flex space-x-4 items-center">
            <button className="hidden md:inline-block text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-50">Your cart</button>
            <Link href="/cart" >
            <ShoppingCartIcon className="h-6 w-6 text-gray-500" />
            </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
