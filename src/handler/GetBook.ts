import getObjectFromRequestBodyStream from "./ParseJson";


async function GetBook () {

    const url = "http://localhost:8000/api/v1/book" ;

    const responce = await fetch(url);

    const result = await  getObjectFromRequestBodyStream(responce.body);

    if ( result.data)
      return result.data ;

    return null ;
}


export default GetBook;