"use client";

import { NAVBAR_CATEGORES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type NavCategore = (typeof NAVBAR_CATEGORES)[number];

interface NavIteamProps {
  handlIndex: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
  categore: NavCategore;
}

const NavItem = ({
  categore,
  handlIndex,
  isAnyOpen,
  isOpen,
}: NavIteamProps) => {
  

  return (
    <div className="flex">
      <div className="relative flex items-start">
        <Button
          className="gap-1.5 text-base"
          onClick={handlIndex}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {categore.labal}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-green-300", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn("absolute inset-x-2 top-full text-sm text-green-400", {
            "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
          })}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 top-1/2 bg-white shadow"
          />
          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {categore.features.map((element, index) => (
                    <div
                      key={element.name}
                      className="group relative text-base sm:text-sm"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-200">
                        <Image alt = {`categore ${element.name}`} src = {element.image} fill />
                      </div>
                      <Link 
                        href={element.link}
                        className="mt-6 block font-bold text-gray-800 ">
                        {element.name}
                      </Link>
                      <p
                        aria-hidden = "true"
                        className="mt-1"
                        >
                            show up
                        </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
