
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const AuthParamsSingup = z
  .object({
    email: z.string().email("not valid from "),
    password: z
      .string()
      .min(8, { message: "passord to short " })
      .max(16, { message: "password to long" }),

    confirmpassword: z
      .string()
      .min(8, { message: "passord to short " })
      .max(16, { message: "password to long" }),
    name : z
    .string(),
  })
  .refine((value) => value.confirmpassword == value.password, {
    message: "confirm password not coreceted",
  });


export type  TAuthParamsSingup =  z.infer< typeof AuthParamsSingup>;


export const resolvers = zodResolver(AuthParamsSingup) ;