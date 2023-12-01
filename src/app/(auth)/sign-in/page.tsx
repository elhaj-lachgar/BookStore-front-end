"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import  {TAuthCredentialsValidator , resolvers } from "@/Validator/SinginValidator"
import SignInhandler from "@/handler/sign-in";
import { useRouter } from "next/navigation";


const page = () => {

  const router = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm <TAuthCredentialsValidator>({
    resolver: resolvers
  });


  async function EventSubmit ( value : TAuthCredentialsValidator) {
      const response = await SignInhandler (value);
      if ( response ) {
          router.push("/");
      }
  }

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0 ">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-2xl font-bold">Create account</h1>
            <Link
              href="/sign-up"
              className={buttonVariants({
                variant: "link",
                className: "text-blue-600 font-blod text-2xl",
              })}
            >
              Create  account ? Sign up
              <ArrowRight className="ml-1 text-lg" />
            </Link>
          </div>
          <div className="grid gap-6 ">
            <form onSubmit={handleSubmit(EventSubmit)}>
              <div className="grid gap-2">
                {/* email */}
                <div className="grid gap-1 py-2">
                  <Label
                    htmlFor="email"
                    className="text-2xl sm:text-xl text-gray-900"
                  >
                    Email
                  </Label>
                  <Input
                  {...register("email")}
                    placeholder="you@exemple.com"
                  />
                </div>

                {/* password */}

                <div className="grid gap-1 py-2">
                  <Label
                    htmlFor="passorwd"
                    className="text-2xl sm:text-xl text-gray-900"
                  >
                    Password
                  </Label>
                  <Input
                   {...register("password")}
                    type="password"
                    placeholder="entre passoword"
                  />
                </div>

                <div className="grid gap-1 py-2">
                  <Label
                    htmlFor="confirm-password"
                    className="text-2xl sm:text-xl text-gray-900"
                  >
                      Confirm Password
                  </Label>
                  <Input
                   {...register("confirmpassword")}
                    type="password"
                    placeholder="entre passoword"
                  />
                </div>

                {/* submit button */}

                <Button
                  className="bg-blue-600 hover:bg-blue-400"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
