const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',    // Replace with your MySQL username
    password: 'password',// Replace with your MySQL password
    database: 'furnihome',
    port: 3306
  });
  
  // Connect to MySQL
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database: ', err);
      return;
    }
    console.log('Connected to MySQL database');
  });

  module.exports =connection;