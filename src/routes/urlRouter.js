import { Router } from "express";
import tokenValidation from "../middlewares/tokenMiddleware.js";
import { shortenUrl, getUrl,redirectUrl,deleteUrl } from "../controllers/urlController.js";


const urlsRouter = Router();

urlsRouter.post("/urls/shorten",tokenValidation,shortenUrl)
urlsRouter.get("/urls/:id", getUrl)
urlsRouter.get("/urls/open/:shortUrl", redirectUrl)
urlsRouter.delete("/urls/:id",tokenValidation,deleteUrl)

export default urlsRouter