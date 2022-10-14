import connection from "../database.js";

const tokenValidation = async (req,res,next) =>{

    const authorization = req.headers.authorization;

    const token = authorization?.replace('Bearer ', '');
    console.log(token)
    if(!token) 
        return res.status(401).send("Invalid token!")
    
    try{
        const session = (await connection.query(`SELECT * FROM sessions WHERE token = $1`, [token])).rows[0];
        
        if(!session)
            return res.status(401).send("Session expired!")

        res.locals.userId = session.userId;
        res.locals.token = session.token;
        next();


    }catch (error){
        return res.status(500).send("Error connection!")
    }
}
export default tokenValidation;