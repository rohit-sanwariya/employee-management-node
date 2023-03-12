import {  Router } from "express";
import { LoginHandler } from "./LoginHandler";
import { signUpHandler } from "./SignUp.Handler";

const router:Router = Router();


router.post("/login",LoginHandler);
router.post("/signup",signUpHandler);


export default router;