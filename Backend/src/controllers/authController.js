import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import connection from '../database.js';

export async function signUp(req, res) {
    const { name, email, password } = req.body;

    console.log(req.body)

    try {
        const passwordHash = bcrypt.hashSync(password, 10);
        connection.query(`INSERT INTO users (name,email, password) 
        VALUES ($1, $2, $3)`, [name, email, passwordHash]);
        res.status(201).send('User created with success!');
    } catch (error) {
        console.log(error);
        res.sendStatus(422);
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const token = uuid();
        const result = await connection.query(`SELECT * FROM users 
        WHERE email = $1`, [email]);
        const user = result.rows[0];

        console.log(user)
        const passwordValidation = bcrypt.compareSync(password, user.password);

        if (!passwordValidation) {
            return res.status(401).send('Invalid password');
        }

        await connection.query(`DELETE FROM sessions WHERE "userId" = $1`,
            [user.id]);
        await connection.query(`INSERT INTO sessions ("userId", token) 
        VALUES ($1, $2)`, [user.id, token]);
        return res.status(200).send(token);
    } catch (error) {
        console.log(error);
        res.sendStatus(422);
    }
}
