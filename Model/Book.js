import mongoose from "mongoose";

const BookModel = mongoose.Schema({
     titre:{type:String} ,
     auteur:{type:String},
     anneeEdition :{type:String} , 
     prixDA : {type:String} , 
     isbn :{type:String} , 
     genre :{type:String} , 
     quantite:{type:String} , 

})

export default mongoose.model('Book',BookModel)