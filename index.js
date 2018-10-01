// implement your API here
// introduce how routing works

// import express from 'express'; // ES2015 modules > export default someCode;
const express = require("express"); // CommonJS modules > module.exports = someCode;
const cors = require("cors"); // install this package to connect from react

const db = require("./data/db.js");

const server = express(); // creates the server

server.use(cors()); // this neeeded to connect from react

server.get("/", (req, res) => {
  // request/route handler
  res.send("<h1>Hello FSW13!</h1>");
});

server.get("/api/users", (req, res) => {
  db.find()
    .then(users => {
      console.log("\n** users **", users);
      res.json(users);
    })
    .catch(err => res.send(err));
});

// watch for traffic in a particular computer port
const port = 8000;
server.listen(port, () =>
  console.log(`\n=== API running on port ${port} ===\n`)
);

// http://localhost:3000 > the 3000 is the port.
// 80: http, 443: https, 25: email servers
// npm run server or yarn server in our case
