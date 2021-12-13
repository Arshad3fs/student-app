import mysql from "mysql";

//database connections//

export const getConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'student'
    });;
}