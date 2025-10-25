

export async function Post(urlPath:string ,data: Object)
{
   var res =  await fetch(urlPath,{
      method:'POST',
      headers:{ 'Content-Type':'application/json'},
      body:JSON.stringify(data)
    });
    return res;
}

export async function Get(urlPath:string)
{
   var res =  await fetch(urlPath);
   return res;
}