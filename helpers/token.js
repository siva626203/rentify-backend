const jwt=require("jsonwebtoken")
exports.token=(data)=>{
    const result =jwt.sign({mailid:data}, process.env.SECRET_CODE, {
      expiresIn: '1d'});
      return result
}
exports.validate =(token) => {
  const result =jwt.verify(token, process.env.SECRET_CODE, (err, decoded) => {
    if (err) {
      return "Wrong Token";
    } else {
      return decoded;
    }
  });
  return result;
};
