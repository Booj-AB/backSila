import mongoose from "mongoose";

const PdfModel = mongoose.Schema({
     pdf:{type:String} ,
     type:{type:String},
     Image : {type:String},
     des:{type:String} ,
     Title: {type:String} ,

})

export default mongoose.model('Pdf',PdfModel)