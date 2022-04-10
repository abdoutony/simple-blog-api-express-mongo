const express = require("express");
const app = express();
const routes = require("./routes");
require("dotenv").config();
const db = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors
app.use(cors());

app.use("/api", routes());

// db connection
db.connect(process.env.DB_PROD_URI)
  .then(() => {
    console.log("Connected to Mongo DB");
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
