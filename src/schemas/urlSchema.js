import joi from "joi";

const urlPattern = new RegExp('^(https?:\\/\\/)?'+ 
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
'((\\d{1,3}\\.){3}\\d{1,3}))'+ 
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
'(\\?[;&a-z\\d%_.~+=-]*)?'+ 
'(\\#[-a-z\\d_]*)?$','i')

const urlSchema = joi.object({

    url: joi.string().regex(urlPattern).required(),

})

export default urlSchema;