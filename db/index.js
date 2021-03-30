// Import required modules
const mysql = require("mysql");

// Connect to the employee tracker database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_trackerDB'
});

// Query the database and return fields and records from the
// employee table
const dbConnect = () => (
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err
        console.table(res);
}));
dbConnect();