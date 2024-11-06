import mongoose from "mongoose";

const MotModel = mongoose.Schema({
     Image:{type:String} ,
     Title:{type:String},
     des :{type:String} , 
     creat :{type:String} , 

})

export default mongoose.model('Mot',MotModel)