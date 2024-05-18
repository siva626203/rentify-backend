const Validate=require('../helpers/token')
exports.JwtAuth=async(req,res,next)=>{
    try {
        if(req.headers["authorization"]){
             const headerToken = req.headers["authorization"];
             const token = headerToken.split(" ");
             if (Validate.validate(token[1]) === "Wrong Token") {
               res.send({ message: "token invalid" });
             } else {
               next();
             }
        }else{
            res.send({message:"thsi API required Token"})
        }
       
        
    } catch (error) {
        throw error
    }
}
