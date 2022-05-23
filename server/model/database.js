const { createPool } = require('mysql');
const parser = new (require('node-date-parser').default)();

const pool = createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password', 
    database: 'todo',
    dateStrings: 'date'
})

pool.query(`CREATE TABLE IF NOT EXISTS todolist (id INT AUTO_INCREMENT PRIMARY KEY, name varchar(150) not null, created_at DATE not null, completed boolean)`,(err,queryResult) => {
    if(err) {
        // sendError();
        console.log("Table not created",err)
    }
    else {
        console.log("Table created",queryResult)
        // sendSuccessResponse(res,"Success",queryResult)
    }
})

module.exports = pool;