import mysql from "mysql"

export const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Cristi2003',
    database: 'social'

})