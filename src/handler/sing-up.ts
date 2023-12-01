import {TAuthParamsSingup} from "@/Validator/SingupValidator"
import getObjectFromRequestBodyStream from "./ParseJson"


async function  SingupHandler (params:TAuthParamsSingup) {
    
    const url  = "http://localhost:8000/api/v1/auth/sing-up" ;

    const data = JSON.stringify(params);

    const header = {
        "Content-Type" : "application/json"
    }

    const responce  = await fetch ( url , { method : "POST" , headers : header , body : data });

    const result = await getObjectFromRequestBodyStream(responce.body);

    const token = result?.token ;

    if ( token ) {
        window.localStorage.setItem('token' , token ) ;
        window.localStorage.setItem("user" , JSON.stringify(result.data));
        return result.data ;
    }

    return null ;
}

export default SingupHandler ;