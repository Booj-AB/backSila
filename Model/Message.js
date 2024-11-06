import mongoose from "mongoose";

const MesModel = mongoose.Schema({
     Nom:{type:String} ,
     mes:{type:String},
     Email :{type:String} , 
     sub : {type:String} , 
     creat :{type:String} , 

})

export default mongoose.model('Mes',MesModel)