// Connect Node.js to MySQL
let mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "DB_PASSWORD",
        database: "burgers_db"
    });
};

// Make connection
connection.connect();

// Export connection for use by our Object Releational Model (ORM)
module.exports = connection;