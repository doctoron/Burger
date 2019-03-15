// Connect Node.js to MySQL
const mysql = require('mysql');

let connection = mysql.createConnection({
    port: 3306,
    host:"localhost",
    user: "root",
    password: "kvVs9wRD89Pd3vTb",
    database: "burgers_db"
});

// Make connection
connection.connect(function(err){
    if(err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as id: ${connection.threadId}`);
});

// Export connection for use by our Object Releational Model (ORM)
module.exports = connection;