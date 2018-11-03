const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();

const controller = require("./controller");

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/houses", controller.getHouses);
app.post("/api/add", controller.addHouse);
app.delete("/api/houses/:house_id", controller.deleteHouse);

PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
