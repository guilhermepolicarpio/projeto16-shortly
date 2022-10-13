import connection from "../database.js";
import bcrypt from "bcrypt"

export default function loginMiddleware(loginSchema){
    return async(req,res,next) =>{
    const { email, password} = req.body;

    try{
        const validation = loginSchema.validate(req.body)

        if(validation.error){
            return res.status(422).send(validation.error.message)
        }

        next()

    }catch(error){
    console.log(error)
    res.sendStatus(422)
    }
    }
}