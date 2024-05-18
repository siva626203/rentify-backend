const mongoose=require('mongoose')
const PropertiesSchema =new mongoose.Schema({
  name: { type: String, required: true },
  place: { type: String, required: true },
  area: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  hospitals: { type: String, required: true },
  colleges: { type: String, required: true },
  price: { type: Number, required: true },
  images:{type:Array},
  seller: { type: mongoose.ObjectId,ref:'Users', required: true },
});

var PropertiesModel;
try {
    PropertiesModel=mongoose.model("Properties",PropertiesSchema)
} catch (error) {
    PropertiesModel=mongoose.model("Properties")
}   
module.exports=PropertiesModel