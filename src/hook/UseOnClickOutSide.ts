import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const UseOnClickOutSide = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {

    useEffect(() => {
        const listen = ( event : Event ) => {
            const ele = ref?.current ;

            if ( !ele || ele.contains((event?.target as Node) || null)) return ;

            handler(event);
        };

        document.addEventListener("mousedown" , listen);
        document.addEventListener("touchstart" , listen);

        return () => {
            document.removeEventListener("mousedown" , listen);
            document.removeEventListener("touchstart" , listen);
        }
    } , [ ref , handler ])
};
