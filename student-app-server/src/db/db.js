import mysql from "mysql";

// DataBase Connection//

export const getConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'student'
    });;
}