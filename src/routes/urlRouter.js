import { Router } from "express";
import tokenValidation from "../middlewares/tokenMiddleware.js";
import { shortenUrl } from "../controllers/urlController.js";


const urlRouter = Router();

urlRouter.post("/urls/shorten",tokenValidation,shortenUrl)

export default urlRouter