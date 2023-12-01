import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {ArrowDownToLine , ShieldCheck , Leaf} from "lucide-react"

const perks = [
  {
    name : "book delivery" ,
    icon : ArrowDownToLine ,
    description : "get your Book with your prefer format"
  },
  {
    name : "Garuntide quality" ,
    icon : ShieldCheck ,
    description : "our team to ensure our highet quality standards"
  },
  {
    name : "For the plante" ,
    icon : Leaf ,
    description : "protacte  plante by saving the trees "
  }
]
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">
            Your marketplace for higher quality{" "}
            <span className="text-green-500">Services</span>.
          </h1>
          <p className="text-2xl mt-6 max-w-prose text-muted-foreground sm:text-1xl">
            welcome to E-shope . Every{" "}
            <span className="text-green-500 font-bold">Book</span> on our
            platforme is verfied by our team to ensure our highet quality
            standards.
          </p>
          <div className="flex flex-col sm:flex-row mt-6 gap-6">
            <Link href={"/products"} className={cn(buttonVariants())}>
              Breawse
            </Link>
            <Button className={cn(buttonVariants({ 
                variant: "ghost",
                className : "bg-green-500 font-bold font-mono" }))}>
              Search &rarr;
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6  lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              {
                perks.map((perk)=>(
                  <div key={perk.name} className="text-center md:flex md:items-start  md:text-left lg:block lg:text-center ">
                    <div className="md:flex-shrink-0 flex justify-center">
                      <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                        <perk.icon/>
                      </div>
                    </div>
                    <div className="mt-6 md:ml-4 md:mt-0 lg:nl-0 lg:mt-6">
                        <h3 className="text-base font-medium text-green-900">{perk.name}</h3>
                        <p className="mt-3 text-sm text-green-600">{perk.description}</p>
                    </div>
                  </div>
                ))
              }
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
