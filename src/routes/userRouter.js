import { Router } from "express";
import tokenValidation from "../middlewares/tokenMiddleware.js";
import { getUser } from "../controllers/usersController.js";

const userRouter = Router();

userRouter.get("/users/me", tokenValidation,getUser)


export default userRouter