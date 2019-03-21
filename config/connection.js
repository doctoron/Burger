// Connect Node.js to MySQL
let mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "kvVs9wRD89Pd3vTb",
    database: "burgers_db"
});
};

// Make connection
connection.connect();

// Export connection for use by our Object Releational Model (ORM)
module.exports = connection;