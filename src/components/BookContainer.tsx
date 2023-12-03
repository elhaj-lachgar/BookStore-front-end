"use client";
import Image from "next/image";
import {
  CardHeader,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { FormatPrice } from "@/lib/utils";
import Link from "next/link";
import { BookContainerProps } from "@/lib/utils";


const BookContainer = ({
  ISBN,
  author,
  image,
  price,
  summary,
  title,
}: BookContainerProps) => {
  return (
    <Link href={`/products/${ISBN.toString()}`}>
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="m-auto w-60 h-60 relative">
                    <Image src={image} alt = "image of book " fill />
                </div>
            </CardContent>
            <CardFooter>
                {
                    (FormatPrice(price.value.toString()))
                }
            </CardFooter>
        </Card>
    </Link>
  );
};

export default BookContainer;
