// // const db = require('./db')
// // const express = require("express");
// // const app = express();
// const db = require("./db");
// // const path = require('path');


// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql2");
// require("dotenv").config();
// const path = require("path");
// const app = express();

// //Connecting to the database and checking for errors if any are present
// // const db_config = {
// //     host: process.env.host,
// //     user: process.env.user,
// //     password: process.env.password,
// //     database: process.env.database,
// // };
// // const PORT = 7000;
// // const deborah = mysql.createConnection(db_config);

// // deborah.connect((err) => {
// //     if(err) {
// //         return err 
// //     } else {
// //         console.log("database is connected this time")
// //     }
// // })
// db.execute('SELECT * FROM products')
// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err)
// });

// //setting static path
// app.use(express.static(path.join(__dirname, 'src')));
// app.listen(PORT, ()=> console.log('listening on ' + PORT));


// //setting 1st party APIs
// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.get('/products', (req, res) => {
//     // if (req.query) {
//     //     queryValue = req.query;
//     //   }
//     deborah.promise().query(`SELECT * FROM products`)
//     .then(([ rows ]) => {
//         res.send(rows);
//         console.log(`Response: ${rows}`);
//     })
//     .catch(error => {
//         throw error;
//     });
// //     db.query(
// //         `SELECT * FROM products`,
// //         (error, result) => {
// //           res.send(result);
// //           if(error) {
// //             return error;
// //           }
// //         })
// // .then(result => {
// //     console.log(result);
// //     res.render(result);
// // })
// // .catch(err => {
// //     console.log(err)
// // });
    
// });

// app.get('/contact', (req, res) => {
//     res.render('contact');
// });
















//alternative code
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
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/products", (req, res) => {
  const q = "INSERT INTO products(`name`, `description`, `price`, `image`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.price,
    req.body.description,
    req.body.image,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});

