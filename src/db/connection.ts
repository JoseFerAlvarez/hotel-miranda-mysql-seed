import mysql from "mysql";

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

function dbQuery(query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err: Error, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}


export { dbQuery };
export default connection;
