import connection from "../database.js";

export default function authMiddleware(authSchema){
    return async(req,res,next) =>{
        const { name, email, password,confirmPassword} = req.body;
        const validation = authSchema.validate(req.body)

        const verifyUser = await connection.query('SELECT * FROM users WHERE email = $1', [email]);

        if(verifyUser.rowCount>0){
            return res.status(409).send("Error: a user is already registered with this email")
        }

        if(validation.error){
            return res.status(422).send(validation.error.message)
        }

        if(password !== confirmPassword){
            return res.status(422).send("Error on password validation")
        }

        next()
    }
}