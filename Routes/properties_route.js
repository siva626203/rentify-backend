const express = require("express");
const app = express.Router();
require("dotenv").config();
const Property = require("../Controllers/properties_controller");
app.get("/api", (req, res) => {
  res.send("API is Working");
});
app.post("/api/property/register",Property.property_create);
app.get("/api/property/:id", Property.property_filter);
app.get("/api/property", Property.property_get);
module.exports = app;
