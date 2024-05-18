const express = require("express");
const app = express.Router();
const TokenMiddleware = require("../middlewares/jwtAuth");
const Users = require("../Controllers/users_controller");
app.post(
  "/api/user/create",
  Users.user_create
);
app.get("/api/user/login",Users.user_login);
app.put("/api/user/update/:id", TokenMiddleware.JwtAuth,Users.user_update);
app.delete("/api/user/:id", TokenMiddleware.JwtAuth,Users.user_delete);
module.exports = app;
