
"use client"

import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Card from "./Card";
import { useEffect, useState } from "react";

interface UserType {
  createdAt : string ,
  email : string ,
  name : string ,
  role : string ,
  _id : string ,
  _v : Number ,
  slugify : string ,
  updatedAt : string ,
}

const Navbar = () => {

  let [ user , setUser ] = useState<UserType | undefined | null >(undefined);

  useEffect(() => {
    const data =  window.localStorage.getItem("user")
    if ( typeof data == "string" ){
      setUser(JSON.parse(data));
    }
  } , [])
  
  return (
    <nav className="bg-white sticky z-50 top-0 insert-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/*TODO : navbar for mobile */}

              <div className="ml-4 flex lg:ml-0 w-full">
                <Link
                  href="/"
                  className="md:text-3xl sm:text-1xl sm:font-medium text-green-600 text-start md:font-extrabold  font-serif"
                >
                  BooksMarket
                </Link>
                <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                    <NavItems/>
                </div>
                {/* sing in button */}
                <div className="ml-auto flex items-center ">
                  <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-6">
                    {
                      user
                      ?
                      null
                      :
                      (
                        <Link href={"/sing-in"} className={cn(buttonVariants({variant :"ghost"}) , "font-bold ")}>
                          log in
                        </Link>
                      )
                    }

                    {
                      user
                      ?
                      null
                      :
                      (
                        <Link href={"/sing-up"} className={cn(buttonVariants() , "font-bold ")}>
                        Sing up
                        </Link>
                      )
                    }
                    <div className="ml-4 flow-root lg:ml-6">
                      <Card/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </nav>
  );
};

export default Navbar;
