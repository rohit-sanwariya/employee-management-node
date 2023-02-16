import { Request, Response, Router } from "express";
import AuthRouter from './Auth/Auth';
const router:Router = Router();


router.use('/auth', AuthRouter)


export default router;