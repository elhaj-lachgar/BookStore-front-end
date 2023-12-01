
import {TAuthCredentialsValidator} from "@/Validator/SinginValidator"
import getObjectFromRequestBodyStream from "./ParseJson";

async function SignInhandler( params:TAuthCredentialsValidator) {

    const url = "http://localhost:8000/api/v1/auth/sing-in" ;

    const data = JSON.stringify(params) ;

    const header = {
        "Content-Type" : "application/json"
    }

    const response = await fetch( url , { body : data ,method : "POST" ,headers : header }) ;


    const result = await getObjectFromRequestBodyStream ( response.body );

    const token = result?.token ;   


    if ( token ) {
        window.localStorage.setItem("token" , token );
        window.localStorage.setItem("user" , JSON.stringify(result.data));
        return result.data ;
    }

    return null ;
}

export default SignInhandler ;