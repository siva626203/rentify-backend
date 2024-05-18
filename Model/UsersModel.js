const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    index: { unique: true, sparse: true },
  },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phonenumber: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 13,
    index: { unique: true, sparse: true },
  },
  type: { type: String, required: true },
  password: { type: String, required: true },
});

var UsersModel;
try {
  UsersModel = mongoose.model("Users", UsersSchema);
} catch (error) {
  UsersModel = mongoose.model("Users");
}
module.exports= UsersModel;
