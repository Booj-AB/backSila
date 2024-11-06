
import mongoose from "mongoose";

const ProModel = mongoose.Schema({
     surface:{type:String} ,
     pays:{type:String},
     paysAfrican:{type:String} ,
     expo: {type:String} ,
     titer :  {type:String} ,   
     visit: {type:String} ,
  

})

export default mongoose.model('Pro',ProModel)

