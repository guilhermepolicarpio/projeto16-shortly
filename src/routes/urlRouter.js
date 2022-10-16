import { Router } from "express";
import tokenValidation from "../middlewares/tokenMiddleware.js";
import { shortenUrl, getUrl,redirectUrl,deleteUrl } from "../controllers/urlController.js";
import urlSchema from "../schemas/urlSchema.js";
import validateSchema from "../middlewares/validateMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten",tokenValidation,validateSchema(urlSchema), shortenUrl)
urlsRouter.get("/urls/:id", getUrl)
urlsRouter.get("/urls/open/:shortUrl", redirectUrl)
urlsRouter.delete("/urls/:id",tokenValidation,deleteUrl)

export default urlsRouter;