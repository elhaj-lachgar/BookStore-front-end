"use client"
import {useForm} from "react-hook-form";
import {TAuthParamsAdmin , resolvers} from "@/Validator/AdminValidator";
import AdminHandler from "@/handler/Admin";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button , buttonVariants } from "@/components/ui/button";

const page = () => {

    const router = useRouter();

    const { formState : {errors} , handleSubmit , register} = useForm <TAuthParamsAdmin>(
        {
            resolver : resolvers
        }
    )

    const SubmitEvent = async ( data : TAuthParamsAdmin) => {
        
        const response = await AdminHandler(data) ;

        if ( response != null ){
            window.localStorage.setItem('per' , "yes");
            router.push('/admin/list');
        }

    }   

    return (
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0 ">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(SubmitEvent)}>
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
                      Rest Code
                  </Label>
                  <Input
                   {...register("rest_code")}
                    type="number"
                    placeholder="entre rest code"
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
    )
}



export default page ;