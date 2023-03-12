import { Request, Response, Router } from "express";
import AuthRouter from './Auth/Auth';
const router:Router = Router();


router.use('/oauth2', AuthRouter);


export default router;