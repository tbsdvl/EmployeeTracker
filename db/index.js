// Import required modules
const mysql = require("mysql");
const util = require("util");

// Connect to the employee tracker database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_trackerDB'
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;
