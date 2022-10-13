import { Router} from 'express'
import { signUp,signIn } from '../controllers/authController.js';
import signUpSchema from '../schemas/signUpSchema.js';
import loginSchema from '../schemas/loginSchema.js';
import registerMiddleware from '../middlewares/registerMiddleware.js';
import loginMiddleware from '../middlewares/loginMiddleware.js';

const authRouter = Router();

authRouter.post("/signup",registerMiddleware(signUpSchema),signUp)
authRouter.get("/signin", loginMiddleware(loginSchema),signIn)

export default authRouter