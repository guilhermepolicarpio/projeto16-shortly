import connection from "../database.js";
import bcrypt from "bcrypt"

export async function signUp(req,res){

    const { name, email, password} = req.body;

    try{
    
        const verifyUser = await connection.query('SELECT * FROM users WHERE email = $1', [email]);

        if(verifyUser.rowCount>0){
            return res.status(409).send("Error: a user is already registered with this email")
        }

        const passwordHash = bcrypt.hashSync(password, 10);

        connection.query(`INSERT INTO users (name,email, password) VALUES ($1, $2, $3)`, [name, email, passwordHash])

        res.status(201).send("User created with success!")
        

        

    }catch (error){
        console.log(error)
        res.sendStatus(422)
    }

}