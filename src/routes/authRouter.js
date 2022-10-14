import { Router} from 'express'
import { signUp,signIn } from '../controllers/authController.js';
import signUpSchema from '../schemas/signUpSchema.js';
import loginSchema from '../schemas/loginSchema.js';
import registerMiddleware from '../middlewares/registerMiddleware.js';
import validateSchema from '../middlewares/validateMiddleware.js';

const authRouter = Router();

authRouter.post("/signup",registerMiddleware(signUpSchema),signUp)
authRouter.get("/signin", validateSchema(loginSchema),signIn)

export default authRouter