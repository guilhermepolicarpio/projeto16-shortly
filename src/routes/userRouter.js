import { Router } from 'express';

import { getUser, ranking } from '../controllers/usersController.js';
import tokenValidation from '../middlewares/tokenMiddleware.js';

const userRouter = Router();

userRouter.get("/users/me", tokenValidation, getUser)
userRouter.get("/ranking", ranking)


export default userRouter;