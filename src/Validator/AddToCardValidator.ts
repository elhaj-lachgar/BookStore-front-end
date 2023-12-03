import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const AuthCardParams = z.object({
    quantity : z.number().min(1)
})

export type TAuthCardParams = z.infer<typeof AuthCardParams>;


export const resolvers = zodResolver(AuthCardParams);