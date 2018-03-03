var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  user: "t83daexs85ppfj8o",
  password: "uwb0mfxzqzdeemq5",
  database: "hotdogs_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;