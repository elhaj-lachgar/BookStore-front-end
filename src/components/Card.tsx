"use client";

import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "./ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { FormatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Card = () => {
  const itemCount = 2;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="sapce-y-2.5 pr-6">
          <SheetTitle>Cart({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/*TODO : card items */}
              card items
            </div>
            <div className="space-y-4 pr-6">
              <hr />
              <div className="space-y-1.5 pr-6">
                <div className="flex">
                  <span className="flex-1">shopping cart</span>
                  <span>Free</span>
                </div>

                <div className="flex">
                  <span className="flex-1"> Transaction Fee</span>
                  <span>{FormatPrice(1)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="#"
                    className={buttonVariants({
                      className: "bg-blue-500 w-full",
                    })}
                  >
                    continue check out
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div className="relative mb-4 h-80 w-80 text-green-400">
                <Image src={"/cart/emptyCart.png"} alt={"empty cart"} fill />
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Card;
