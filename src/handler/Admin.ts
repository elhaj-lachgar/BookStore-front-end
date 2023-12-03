import { TAuthParamsAdmin } from "@/Validator/AdminValidator";

import getObjectFromRequestBodyStream from "./ParseJson";

async function AdminHandler (params: TAuthParamsAdmin) {
  const url = "http://localhost:8000/api/v1/user/admin";

  const data = JSON.stringify(params);

  const header = {
    "Content-Type": "application/json",
  };

  const response = await fetch(url, {
    method: "POST",
    headers: header,
    body: data,
  });

  const result = await getObjectFromRequestBodyStream( response.body );

  const token = result?.token;

  if ( token ) {
    window.localStorage.setItem("admin" , JSON.parse(result.data) );
    window.localStorage.setItem("token" , token);
    return result.data ;
  }

  return null ;
}


export default AdminHandler ;