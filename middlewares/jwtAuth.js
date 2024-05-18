const jwt=require('json-web-token')
const JwtAuth=(req,res,next)=>{
    try {
        const Auth = jwt.verify(token, process.env.JWT_SECRET);
        if(Auth){
            next()
        }
    } catch (error) {
        
    }
}
export default JwtAuth