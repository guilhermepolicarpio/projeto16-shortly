import { Router } from "express";
import tokenValidation from "../middlewares/tokenMiddleware.js";

const userRouter = Router();

//userRouter.get("/users/me", tokenValidation)


export default userRouter