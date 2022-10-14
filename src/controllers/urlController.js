import connection from "../database.js";
import {nanoid} from "nanoid"

async function shortenUrl(req,res){

    const { url } = req.body; 
    const shortUrl = nanoid (9);

    try{

        console.log(res.locals.userId)
    await connection.query(`INSERT INTO urls ("url", "shortUrl", "id") VALUES ($1, $2, $3)`, [url,shortUrl,res.locals.userId])
    return res.status(201).send(shortUrl)
    
    }catch (error){
        console.log(error)
        return res.status(500).send("Error connection!")
    }
}

async function getUrl(req,res){

    const {id} = req.params;

    try{
        const url = await connection.query(`SELECT * FROM "urls" WHERE id = $1`, [id])

        if(url.rowCount === 0)
            return res.status(404).send("URL not found")
        
        return res.status(200).send(url.rows[0])
    }catch (error){
        console.log(error)
        return res.status(500).send("Error connection!")
    }

}

async function redirectUrl(req,res){

    const { shortUrl} = req.params;
    
    try{
        const url = await connection.query(`SELECT * FROM "urls" WHERE "shortUrl"= $1`, [shortUrl])
        
        if(url.rowCount === 0)
            return res.status(404).send("URL not found")
        
        const urlRedirect = url.rows[0];
        console.log(urlRedirect)

        await  connection.query(`UPDATE "urls" SET "visitCount" = "visitCount" + 1 WHERE "shortUrl" = $1`, [urlRedirect.shortUrl])

        return res.redirect(200,urlRedirect.url)

    }catch (error){
        console.log(error)
        return res.status(500).send("Error connection!")
    }
}


async function deleteUrl(req,res){

    const {id} = req.params;

    try{
   
    const checkUrl = await connection.query(`SELECT * FROM "urls" WHERE "shortUrl" = $1`, [id]) 

    if(checkUrl.rowCount === 0)
        return res.status(404).send("URL not found")

    if(checkUrl.rows[0].id !== res.locals.userId)
        return res.status(401).send("Invalid request")

    await connection.query(`DELETE FROM "urls" WHERE "shortUrl"=$1`, [id])

    return res.status(204).send("URL deleted")
    }catch (error){
        console.log(error)
        return res.status(500).send("Error connection!")
    }
}
export {shortenUrl, getUrl, redirectUrl,deleteUrl}