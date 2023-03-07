export default function validateSchema(Schema) {
    return async (req, res, next) => {
        try {
            const validation = Schema.validate(req.body);

            if (validation.error) {
                return res.status(422).send(validation.error.message);
            }
            next();
        } catch (error) {
            console.log(error);
            res.sendStatus(422);
        }
    };
};
