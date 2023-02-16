import { Request, RequestHandler, Response } from "express";

export const  LoginHandler:RequestHandler = (req: Request, res: Response)=>{
    if(req?.body?.username === "rohitsanwariya" && req.body?.password === "Next@#5432" ){
        return res.status(200).json({res:0});
    }
   
    return res.status(500).json({error:"User name or password incorrect"});
};