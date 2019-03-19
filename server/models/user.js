const mysql =  require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'users',
    password: 'ptetestPTETEST'
})

module.exports = pool.promise();