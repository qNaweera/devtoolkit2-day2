// file to connect js file to mysql database

const mysql = require("mysql");

const properties = {
  host: "34.126.172.116",
  user: "root",
  password: "fintechsglab",
  port: 3306,
  database: "market",
};

let connection = mysql.createConnection(properties); //defines the connection

connection.connect((error) => {
  if (error) {
    console.error("Connectionto MySQL failed!" + error);
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = {
    connection,
};

//ctrl + c to close a running programme manually

