import { verifyToken } from "../../../../utils/jwt";


export async function POST(request,{ params }){
    const { id } =await params;
    const token = request.cookies.get("token")?.value;
    const val=await verifyToken(token);
    if(val)
    {
          console.log(val);
    }
    
}