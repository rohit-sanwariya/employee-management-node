import { Request, RequestHandler, Response } from "express";

export const  LoginHandler:RequestHandler = (req: Request, res: Response)=>{
    if(req?.body?.username === "rohitsanwariya" && req.body?.password === "Next@#5432" ){
        return res.status(200).json({
            access_toke:"134234234234242",
            refresh_toke:"134234234234242",
            expires_in:134,
            token_type:"bearer",
            client_id:"1344242424",
            issued:"date",
            expires:"date",
            username:"Rohit Sanwariya"
        });
    }
   
    return res.status(500).json({error:"User name or password incorrect"});
};