var mysql = require('mysql2');

var connMySQL = () => {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'noticias'        
    });
}

module.exports = () => {
    return connMySQL;
}

