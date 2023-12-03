"use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useEffect, useState } from "react";
import { BookContainerProps, FormatPrice } from "@/lib/utils";
import damydata from "@/../public/damydata/data.json";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TAuthCardParams, resolvers } from "@/Validator/AddToCardValidator";
import { useForm } from "react-hook-form";
const page = ({ params }: { params: Params }) => {
  let [data, setData] = useState<BookContainerProps | null | undefined>(null);
  let [quantity, setQuantity] = useState<number>(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCardParams>({
    resolver: resolvers,
  });

  const handleQuantity = async (data: TAuthCardParams) => {};

  useEffect(() => {
    const responce = damydata.find((element) => {
      return element.ISBN.toString() == params.book;
    });
    setData(responce);
  }, []);

  return (
    <>
      {data ? (
        <>
          <div className="w-2/3 mx-auto mt-10 flex justify-center mb-20 ">
            <div className="w-4/5 mx-auto flex gap-20 flex-wrap">
              <h1 className="w-full text-2xl font-bold lg:text-6xl ">
                {data.title}
              </h1>
              <div className="relative h-96 w-full lg:w-1/3 mt-10">
                <Image src={data?.image} alt="book cover" fill />
              </div>
              <div className="h-96 overflow-y-scroll w-full lg:w-1/2 no-scrollbar mt-10">
                <label className="text-gray-700 text-center text-4xl">
                  Description
                </label>
                <p className="text-gray-900 mt-5  ">{data.summary}</p>
              </div>
              <div className="w-full">
                <p className="text-1xl lg:text-2xl font-bold text-green-500 ">
                  Author :{" "}
                </p>
                <span className="text-xl lg:text-2xl font-bold text-gray-700">
                  {"  "} {data.author}
                </span>
              </div>
              <div className="text-center w-full text-2xl lg:text-4xl text-blue-400 ">
                Price :{" "}
                <span className="text-gray-500">
                  {FormatPrice(data.price.value)}
                </span>
              </div>
              <div className="flex gap-10 ">
                <Button className={buttonVariants({ variant: "ghost" })}>
                  {" "}
                  Add To Cart{" "}
                </Button>
                <form onSubmit={handleSubmit(handleQuantity)}>
                  <Input
                    {...register("quantity")}
                    className="w-20"
                    value={quantity}
                    type="number"
                    onChange={(e) => setQuantity(parseInt(e.currentTarget.value))}
                  />
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default page;
