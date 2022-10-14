import connection from "../database.js";
import {nanoid} from "nanoid"

async function shortenUrl(req,res){

    const { url } = req.body; 
    const shortUrl = nanoid (9);

    try{

        console.log(res.locals.userId)
    await connection.query(`INSERT INTO urls ("url", "shortUrl", "userId") VALUES ($1, $2, $3)`, [url,shortUrl,res.locals.userId])
    return res.status(201).send(shortUrl)
    
    }catch (error){
        console.log(error)
        return res.status(500).send("Error connectionnnnn!")
    }
}
export {shortenUrl}