const Connect=require('../mongodb')
const Properties=require("../Model/PropertiesModel")
const encode=require('../helpers/encode')
exports.property_create=async(req,res)=>{
    Connect();
    try {
        const Property=await Properties.create(req.body)
        
        res.send({message:"Property created",data:Property})
    } catch (error) {
        res.send({ message: error.message });
    }
}
exports.property_filter = async (req, res) => {
  Connect();
  try {
    if(req.params['id']){
        const Property = await Properties.find({_id:req.params['id']}).populate('seller');
        res.send({ message: "Property fetched", data: Property });
    }
  } catch (error) {
    res.send({ message: error.message });
  }
};
exports.property_get = async (req, res) => {
  Connect();
  try {
   const Property = await Properties.find({}).populate('seller');
   res.send({ message: "All Properties fetched", data: Property });
  } catch (error) {
    console.log(error);
    res.send({ message: error.message });
  }
};
exports.property_update = async (req, res) => {
  Connect();
  try {
    const id=req.params['id']
    const Property = await Properties.updateOne({_id:id,},req.body);
    res.send({ message: "Property updated", data: Property });
  } catch (error) {
    console.log(error);
    res.send({ message: error.message });
  }
};
exports.property_delete = async (req, res) => {
  Connect();
  try {
    const id = req.params["id"];
    const Property = await Properties.deleteOne({ _id: id });
    res.send({ message: "Property deleted", data: Property });
  } catch (error) {
    console.log(error);
    res.send({ message: error.message });
  }
};
