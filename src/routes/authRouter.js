import { Router } from 'express';

import { signIn, signUp } from '../controllers/authController.js';
import registerMiddleware from '../middlewares/registerMiddleware.js';
import validateSchema from '../middlewares/validateMiddleware.js';
import loginSchema from '../schemas/loginSchema.js';
import signUpSchema from '../schemas/signUpSchema.js';

const authRouter = Router();

authRouter.post("/signup", registerMiddleware(signUpSchema), signUp)
authRouter.get("/signin", validateSchema(loginSchema), signIn)

export default authRouter