import joi from "joi";

const urlRegex = new RegExp('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)')

const urlSchema = joi.object({

    url: joi.string().regex(urlRegex).required(),

})

export default urlSchema;