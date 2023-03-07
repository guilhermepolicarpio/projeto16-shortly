import { Router } from 'express';

import { deleteUrl, getUrl, redirectUrl, shortenUrl } from '../controllers/urlController.js';
import tokenValidation from '../middlewares/tokenMiddleware.js';
import validateSchema from '../middlewares/validateMiddleware.js';
import urlSchema from '../schemas/urlSchema.js';

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", tokenValidation, validateSchema(urlSchema), shortenUrl)
urlsRouter.get("/urls/:id", getUrl)
urlsRouter.get("/urls/open/:shortUrl", redirectUrl)
urlsRouter.delete("/urls/:id", tokenValidation, deleteUrl)

export default urlsRouter;