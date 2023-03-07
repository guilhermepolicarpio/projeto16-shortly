import { Router } from 'express';

import authRouter from './authRoutes.js';
import urlRouter from './urlRoutes.js';
import userRouter from './userRouter.js';

const router = Router();

router.use(authRouter);
router.use(urlRouter);
router.use(userRouter);

export default router;
