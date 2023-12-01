
async function getObjectFromRequestBodyStream(target : ReadableStream | null )  {

    if ( !target)
     return null ;
    
    const input = await target.getReader().read();
    const decoder = new TextDecoder();
    const string = decoder.decode(input.value);
    return JSON.parse(string);
}

export default getObjectFromRequestBodyStream ;