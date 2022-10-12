import connection from "../database.js";
import bcrypt from "bcrypt"

export async function signUp(req,res){

    const { name, email, password} = req.body;

    try{
        const passwordHash = bcrypt.hashSync(password, 10);
        connection.query(`INSERT INTO users (name,email, password) VALUES ($1, $2, $3)`, [name, email, passwordHash])
        res.status(201).send("User created with success!")

    }catch (error){
        console.log(error)
        res.sendStatus(422)
    }
}

export async function signIn(req,res){

    const { email, password} = req.body;

    try{
        const user = (await connection.query(`SELECT * FROM users WHERE email = $1`,[email])).rows[0]
        console.log(user)

        if(user.rowCount===0 )
            return res.status(401).send("Invalid email")

    
        const passwordValidation = bcrypt.compareSync(password, user.password)
        
        if(!passwordValidation)
            return res.status(401).send("Invalid password")

        res.status(201).send("Login with success!")

    }catch(error){
        console.log(error)
        res.sendStatus(422)
    }
}