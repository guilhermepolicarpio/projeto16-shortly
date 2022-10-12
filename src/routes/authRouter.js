import { Router} from 'express'
import { signUp,signIn } from '../controllers/authController.js';
import signUpSchema from '../schemas/authSchema.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const authRouter = Router();

authRouter.post("/signup", authMiddleware(signUpSchema),signUp)
authRouter.get("/signin", signIn)

export default authRouter