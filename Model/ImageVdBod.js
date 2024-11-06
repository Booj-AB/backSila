import mongoose from "mongoose";

const ImageVdModel = mongoose.Schema({
     Object:{type:String} ,
     type : {type:String} ,
     Title:{type:String},
     des :{type:String} ,
     date : {type:Date , default : new Date}, 
     creat :{type:String} , 

})

export default mongoose.model('ImageVd',ImageVdModel)