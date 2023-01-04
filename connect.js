import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ahmed9889@lm_a",
  database: "social",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
