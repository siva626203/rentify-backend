const mongoose=require("mongoose")
const Connect=()=>{

    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected")
    } catch (error) {
        throw error
    }
}
module.exports=Connect