const express = require("express");
const { json } = require("sequelize");
const app = express();
const port = 3000;
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:123@localhost:5432/Hospital"
); // Example for postgres

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/woy", (req, res) => {
//   res.send("Woy");
// });

// app.get("/json", (req, res) => {
//   res.status(200).json({ name: "Naufal", age: 23 });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

async function tes() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

tes();

export default sequelize;
