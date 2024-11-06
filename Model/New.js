import mongoose from "mongoose";

const NewModel = mongoose.Schema({
     Image:{type:String} ,
     Title:{type:String},
     des :{type:String} , 
     date:{type:String },
     creat :{type:String} , 

})

export default mongoose.model('New',NewModel)