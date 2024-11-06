import mongoose from "mongoose";

const ParModel = mongoose.Schema({
     Image:{type:String} ,
     type:{type:String},
     creat :{type:String} , 

})

export default mongoose.model('Par',ParModel)