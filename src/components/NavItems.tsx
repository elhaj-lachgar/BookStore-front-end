"use client";

import { NAVBAR_CATEGORES } from "@/config";
import { useState } from "react";
import NavItem from "./NavIteam";

function NavItems() {
  let [active, setActive] = useState<number | null>(null);

  const isAnyOpen = active!==null ;

  return (
    <div className="flex gap-4 h-full">
      {NAVBAR_CATEGORES.map((element, index) => {
        const handleIndex = (): void => {
          if (index === active) {
            setActive(null);
          } else {
            setActive(index);
          }
        };

        const IsOpen = index === active;

        return (
          <NavItem
            handlIndex={handleIndex}
            categore={element}
            isOpen={IsOpen}
            isAnyOpen={isAnyOpen}
            key={element.value}
          />
        );
      })}
    </div>
  );
}

export default NavItems;
