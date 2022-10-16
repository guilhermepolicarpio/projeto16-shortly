import { Router } from "express";
import tokenValidation from "../middlewares/tokenMiddleware.js";
import { getUser, ranking } from "../controllers/usersController.js";

const userRouter = Router();

userRouter.get("/users/me", tokenValidation,getUser)
userRouter.get("/ranking", ranking)


export default userRouter