import { Request, Response, Router } from "express";
import { LoginHandler } from "./LoginHandler";

const router:Router = Router();


router.post("/login",LoginHandler)


export default router;