const mongoose = required("mongoose");
const UsersSchema = mongoose.Schema({
  email: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phonenumber: { type: String, required: true },
  type: { type: String, required: true },
  password: { type: String, required: true }
});

var UsersModel;
try {
  UsersModel = mongoose.model("Users", UsersSchema);
} catch (error) {
  UsersModel = mongoose.model("Users");
}
export default UsersModel;
