const express = require("express");
const app = express.Router();
const TokenMiddleware=require('../middlewares/jwtAuth')
const Property = require("../Controllers/properties_controller");
app.get("/api", (req, res) => {
  res.send("API is Working");
});
app.post("/api/property/register",TokenMiddleware.JwtAuth,Property.property_create);
app.get("/api/property/filter/:id", TokenMiddleware.JwtAuth,Property.property_filter);
app.get("/api/property/all", Property.property_get);
app.put("/api/property/update/:id", Property.property_update);
app.delete("/api/property/delete/:id", Property.property_delete);
module.exports = app;
