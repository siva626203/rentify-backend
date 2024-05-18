const Connect=require('../mongodb')
const Properties=require("../Model/PropertiesModel")
const encode=require('../helpers/encode')
exports.property_create=async(req,res)=>{
    Connect();
    try {
        const Property=await Properties.create(req.body)
        
        res.send({message:"Property created",data:Property})
    } catch (error) {
        res.send(error)
    }
}
exports.property_filter = async (req, res) => {
  Connect();
  try {
    if(req.params['id']){
        const Property = await Properties.find({_id:req.params['id']});
        res.send({ message: "Properties fetched", data: Property });
    }
  } catch (error) {
    res.send(error);
  }
};
exports.property_get = async (req, res) => {
  Connect();
  try {
   const Property = await Properties.find({});
   res.send({ message: "Properties fetched", data: Property });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
