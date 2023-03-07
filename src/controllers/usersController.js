import connection from "../database.js";

async function getUser(req, res) {

    const { userId } = res.locals;

    try {
        const user = await connection.query("SELECT * FROM users WHERE id=$1", [userId])

        if (user.rowCount === 0)
            return res.status(404).send("User not found")

        const { rows: userInfo } = await connection.query(` 
        
        SELECT
                users.id ,
                users.name,

                SUM(urls."visitCount") AS "visitCount",

                ARRAY_AGG(
                    JSON_BUILD_OBJECT(
                        'id', urls.id, 'shortUrl', urls."shortUrl", 'url', urls.url, 'visitCount', urls."visitCount"
                    )
                ) AS "shortenedUrls"

        FROM users
        JOIN urls
             ON urls."userId" = users.id
        WHERE users.id = $1
        GROUP BY users.id,users.name
              
        `, [userId])

        res.status(200).send(userInfo);


    } catch (error) {
        console.log(error)
        return res.status(500).send("Error connection!")
    }

}

async function ranking(req, res) {

    try {

        const { rows: ranking } = await connection.query(`
        
        SELECT 
            users.id, 
            users.name,
            COUNT(urls.id) AS "linksCount",
            COALESCE(SUM(urls."visitCount"), 0) AS "visitCount"
        FROM
            users
            LEFT JOIN urls ON users.id = urls."userId"
        GROUP BY users.id,users.name
        ORDER BY
            "visitCount" DESC,
            "linksCount" DESC
        LIMIT 10
        
        `);

        res.status(200).send(ranking);

    } catch (error) {
        console.log(error)
        return res.status(500).send("Error connection!")
    }
}
export { getUser, ranking }