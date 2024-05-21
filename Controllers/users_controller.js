const Connect = require("../mongodb");
const Users = require("../Model/UsersModel");
const encode = require("../helpers/encode");
const Jwt=require('../helpers/token')
exports.user_create = async (req, res) => {
  Connect();
  try {
    const encoding=await encode.encode(req.body.password)
    req.body.password=encoding
    const user = await Users.create(req.body);
    res.send({ message: "user created", data: user })
  } catch (error) {
    res.status(401).send({message:error.message});
  }
};
exports.user_login = async (req, res) => {
  Connect();
  console.log(req.query)
  try {
    const user = await Users.findOne({ email: req.query.email });
    console.log(user)
    if(!user) 
      {
        return res.send({message:"Invalid email"})
      }

    if (await encode.decode(req.query.password,user.password)) {
      const token = Jwt.token(user.email);
      res.send({ message: "user logged", data: user, token });
    } else {
      res.status(401).send({ message: "wrong password" });
    }
   
  } catch (error) {
   res.send({ message: error.message });
  }
};
exports.user_update = async (req, res) => {
  Connect();
  try {
    const id = req.params["id"];
    console.log(req.body)
    const user = await Users.updateOne({_id:id},req.body);
    if (user.acknowledged) res.send({ message: "user updated", data: user });
    else return res.send({message:"field not found"})
  } catch (error) {
   res.status(401).send({ message: error.message });
  }
};
exports.user_delete = async (req, res) => {
  Connect();
 try {
   const id = req.params["id"];
   const User = await Users.deleteOne({ _id: id });
   res.send({ message: "User deleted", data: User });
 } catch (error) {
   res.status(401).send({ message: error.message });
 }
};