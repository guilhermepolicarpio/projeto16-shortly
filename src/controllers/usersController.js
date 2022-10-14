import connection from "../database.js";

async function getUser(req,res){

    const { user } = res.locals;

    try{
        
        
    }catch (error){
    console.log(error)
    return res.status(500).send("Error connection!")
    }

}

export { getUser}