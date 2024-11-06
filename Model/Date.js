import mongoose from "mongoose";

const DateModel = mongoose.Schema({
     Date:{type:String} ,
     des:{type:String},
     Hour : {type:String}


})

export default mongoose.model('Date',DateModel)