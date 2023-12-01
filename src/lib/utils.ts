import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function FormatPrice(
  price: string | number,
  currency: {
    tag?: "USD" | "MAD";
    notation?: Intl.NumberFormatOptions["notation"];
  }={}
) {

  const { tag = "MAD" , notation = "compact" } = currency;
  
  if ( typeof price == "string") price = parseFloat(price) ;

  return new Intl.NumberFormat("en-US" ,{
    currency : tag ,
    notation ,
    style : "currency" ,
    maximumFractionDigits : 2 
  }).format(price);
} 
