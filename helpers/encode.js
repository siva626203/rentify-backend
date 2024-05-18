const bcrypt=require("bcrypt")
exports.encode=async(password)=>{
    const salt = await bcrypt.genSalt(10);
    const encoded=await bcrypt.hash(password,salt)
    return encoded
}
exports.decode = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);
  return result;
};
