const express = require('express');
const cors = require('cors');
const mysql= require('mysql2');
const app = express();

app.use(express.json());
app.use(cors());

// ESTABLISHED DATABASE CONNECTION
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: 'root',
  password: "password",
  database: 'ecommercev2'
  ,});

    db.connect(err =>{
    if(err){
        console.log(err.message)
        return;
    }
    console.log("Connected to MySQL database")
});


app.get("/products", (req, res) => {
  let queryValue;
  if (req.query) {
    queryValue = req.query;
  }
  const { category, price } = queryValue;

const categoryCheck = category !== "" ? ` category = '${category}'` : "";
const sortedPrice = price === "Low" ? "ASC" : "DESC";
const priceCheck = price !== "" ? ` ORDER BY price ${sortedPrice}` : "";
const whereChecker = categoryCheck ? "WHERE " : "";

  const sqlQuery = `SELECT * FROM products ${whereChecker} ${categoryCheck} ${priceCheck}`;
  db.query(sqlQuery, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});


app.listen(8800, () => {
  console.log("Connected to backend.");
});

