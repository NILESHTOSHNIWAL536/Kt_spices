

export async function Post(urlPath ,data)
{
   var res =  await fetch(urlPath,{
      method:'POST',
      headers:{ 'Content-Type':'application/json'},
      body:JSON.stringify(data)
    });
    return res;
}

export async function Get(urlPath)
{
   var res =  await fetch(urlPath);
   return res;
}