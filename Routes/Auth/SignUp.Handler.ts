import { RequestHandler, Request, Response } from "express";
import User from "../../Models/User/User";



export const signUpHandler: RequestHandler = async (req: Request, res: Response) => {
    const payload: { username: string, password: string } = req.body;
    const newUser = new User(payload);
    try {
        let saved = await newUser.save();
        return res.status(200).json(saved);
    } catch (error) {
        return res.status(500).json(error);
    }
}