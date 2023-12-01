import { z as check } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const AuthCredentialsValidator = check
  .object({
    email: check.string().email("not valid form for email"),
    password: check
      .string()
      .min(8, { message: "to short password" })
      .max(16, { message: "to long passowrd" }),
    confirmpassword: check
      .string()
      .min(8, { message: "to short password" })
      .max(16, { message: "to long passowrd" }),
  })
  .refine((value) => value.password === value.confirmpassword, {
    message: "confirm password incorected",
    path: ["confirmpassword"],
  });

export type TAuthCredentialsValidator = check.infer<
  typeof AuthCredentialsValidator
>;

export const resolvers = zodResolver(AuthCredentialsValidator);
