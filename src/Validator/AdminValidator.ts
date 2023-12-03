import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const AuthParamsAdmin = z.object({
  email: z.string().email({ message: "email not valid" }),
  password: z
    .string()
    .min(8, { message: "password is to short" })
    .max(16, { message: "password is to long " }),
 rest_code : z.number(),
});


export type TAuthParamsAdmin = z.infer< typeof AuthParamsAdmin >

export const resolvers = zodResolver(AuthParamsAdmin);