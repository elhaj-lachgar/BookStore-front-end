import {TAuthCardParams} from "../Validator/AddToCardValidator";
import getObjectFromRequestBodyStream from "./ParseJson";


async function AddElementToCart ( params : TAuthCardParams , bookId : string ){

    const token = window.localStorage.getItem("token");

    if ( !token )
      return null;

    const url = "";

    const header = {
        "Content-Type" : "application/json",
        "authorization" : `Bearer ${token}`
    }

    const data = JSON.stringify({quantity : params.quantity , bookId});

    const response = await fetch(url , {method : "POST" , body : data , headers : header });

    const result = await getObjectFromRequestBodyStream( response.body );

    if ( result.data ){
        return result.data;
    }

    return null;
}


export default AddElementToCart;