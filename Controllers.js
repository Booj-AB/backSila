import MessageModel from "./Model/message.js"
import saveFile from './ConvertImage&Vd&Posct.js'
import ImageVdBodModel from "./Model/ImageVdBod.js"
import MotModel from "./Model/Mots.js"
import NewModel from './Model/New.js'
import PartModel from './Model/Part.js'
import BookModel from './Model/Book.js'
import PdfModel from './Model/Pdf.js'
import DateModel from './Model/Date.js'
import  ProModel from './Model/Pro.js'
import path from 'path'
import fs from 'fs'
const UrlImage = 'http://10.0.2.2:9400/'
// const UrlVd = 'http://10.0.2.2:9400/'
// const UrlPdf = 'http://10.0.2.2:9400/'


function  FunctionfileName(num) {
      let Booj = "jlehdedejhdehfghd54767UJDHDE047RHyuhff7665fgVgf54FIJDERHJ" 
      let id = ''
      for (let i = 0; i < num; i++) {
       let rand = Math.floor(Math.random()* Booj.length)
       id += Booj[rand]
      }
      return id
 }


export const AddMessage =  async (req, res)=>{
      const { body } = req;

          
      const { name, email, subject, message } = body
    
  

     try {
         if(subject == '3026307359397'){
   
            return res.json({code:'001'})
         }
         const createMes = await MessageModel.create({
             Email:email , sub: subject , mes: message , Nom : name
         })
         if(createMes){
            return res.json({code:'01' , message :' Is Send '})
         }
     } catch (err) {
        console.log('err =>' , err);
        
     }
}


export const getMessage =  async (req, res)=>{
     const getAll = await MessageModel.find({})
     return res.json({all : getAll})
}

export const chnageP =  async (req, res)=>{
    const {body} = req
    const {sur , pays , paysAfr , vis  , titres , expo} = body
    console.log(sur , pays , paysAfr , vis  , titres , expo);
    
    const updatedDoc = await ProModel.findOneAndUpdate(
  { _id: '672b4a567bee03b55917a2a8' },  
  { 
    $set: {  
      surface: sur,
      pays: pays,
      paysAfrican: paysAfr,
      visit: vis,
      titer: titres,
      expo: expo,
    },
  },

);
  if(updatedDoc){
     return  res.json({code: '01'})
  }
}

export const getProg =  async (req, res)=>{
    const pro = await ProModel.find()
   return  res.json({pro : pro[0]})
}


export const AddImageVd = async (req,res)=>{
    const {body} = req
    const {Title , Object:file , des , type } = body


  const fileBuffer = Buffer.from(file.split(',')[1], 'base64'); 
  const fileName = `${Date.now()}.${type.split('/')[1]}`; 
  let rand = FunctionfileName(30)
  let filePath = path.join('Images', `${'Booj'}${rand}.png`);
  filePath = filePath.replace(/\\/g, '/');
  fs.writeFile(filePath, fileBuffer, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving file' });
    }
  });

   if(type == 'Image') {
    
         const crat = await ImageVdBodModel.create({
           Title ,
           Object: `${UrlImage}${filePath}`,
           des: des ,
           type
        })
              return res.json({code:'01' })
      }

       const crat = await ImageVdBodModel.create({
           Title ,
           Object :file,
           des: des ,
           type
        })
      return res.json({code:'01' })


  
    
    }

export const getAllImageVd = async (req,res)=>{
    const getAll = await ImageVdBodModel.find()
    console.log('d',getAll);
    

    const Po = getAll.filter((e)=> e.type == 'podcast')
        const Im = getAll.filter((e)=> e.type == 'Image')
            const Vd = getAll.filter((e)=> e.type != 'Image' && e.type != 'podcast')
     return res.json({Im :Im , Vd:Vd ,Po:Po , all :[...Im,...Vd,...Po]})
}

export const getByCatImageVd = async (req,res)=>{
    const {body} = req
    const {type} = body
    const getAll = await ImageVdBodModel.find({type: type})
     return res.json({all : getAll})
}


export const addNew = async (req,res)=>{
    const {body } = req
    const {Image:file , Title , des ,  date} = body

    //   console.log('File' , file);
    //   console.log(Image);
    const type= 'jhjehje'

  const fileBuffer = Buffer.from(file.split(',')[1], 'base64'); 
  const fileName = `${Date.now()}.${type.split('/')[1]}`; 
  let rand = FunctionfileName(30)
  let filePath = path.join('Images', `${'Booj'}${rand}.png`);
    filePath = filePath.replace(/\\/g, '/');
  fs.writeFile(filePath, fileBuffer, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving file' });
    }
  });

      
      
    const crat = await NewModel.create({
       Image:`${UrlImage}${filePath}` , Title , des , date
    })
    return res.json({code:'01'})
}


export const getAllNew = async (req,res)=>{
    const getAll = await NewModel.find()
     return res.json({all : getAll})
}




export const AddMots = async (req,res)=>{
    const {body} = req
    const {Image:file , Title , des } = body

    let type = 'kjdekjdke'

const fileBuffer = Buffer.from(file.split(',')[1], 'base64'); 
  const fileName = `${Date.now()}.${type.split('/')[1]}`; 
  let rand = FunctionfileName(30)
  let filePath = path.join('Images', `${'Booj'}${rand}.png`);
    filePath = filePath.replace(/\\/g, '/');
  fs.writeFile(filePath, fileBuffer, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving file' });
    }
  });

    // const newI = await saveFile(Image)
    const crat = await MotModel.create({
       Image:`${UrlImage}${filePath}`, Title , des
    })
   return res.json({code:'01'})
}


export const getAllMots = async (req,res)=>{
    const getAll = await MotModel.find()
     return res.json({all : getAll})
}


export const AddPar = async (req,res)=>{
    const {body} = req
    const {Image, type} = body
    const NewImage = await saveFile(Image , 'Image')
    const crat = await PartModel.create({  Image:`${UrlImage}${NewImage}` , type:type})
     return res.json({code:'01' })
}


export const getAllPar = async (req,res)=>{
    const getAll = await PartModel.find()
        const Par = getAll.filter((e)=> e.type == 'Par')
            const Spo = getAll.filter((e)=> e.type == 'Spo')
     return res.json({Spo : Spo , Par :Par})
}


export const getAllBook = async (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 50; 
    const skip = (page - 1) * limit; 

    try {
        const books = await BookModel.find().skip(skip).limit(limit); 
        const totalCount = await BookModel.countDocuments(); 

        res.json({
            books, 
            totalCount, 
            currentPage: page,
            totalPages: Math.ceil(totalCount / limit),
        });
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Server error" });
    }
};



export const AddPdf = async (req,res)=>{
     const {body} = req
     const {type,Pdf , des ,Title, Image : file} = body

 const fileBuffer = Buffer.from(file.split(',')[1], 'base64'); 
  const fileName = `${Date.now()}.${type.split('/')[1]}`; 
  let rand = FunctionfileName(30)
  let filePath = path.join('Images', `${'Booj'}${rand}.png`);
    filePath = filePath.replace(/\\/g, '/');
  fs.writeFile(filePath, fileBuffer, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving file' });
    }
  });


     await PdfModel.create({
         type , pdf : Pdf , des ,  Image :`${UrlImage}${filePath}` , Title
     })
       return res.json({code:'01' })
}

export const getPdfByCat = async (req,res)=>{
    const {body} = req
    const {type} = body
    const getAll = await PdfModel.find()
    const  gui = getAll.filter((e)=> e.type == 'gui')
    const  plan = getAll.filter((e)=> e.type == 'plan')
    const  regl = getAll.filter((e)=> e.type == 'regl')
    const cul = getAll.filter((e)=> e.type == 'cul')
     return res.json({gui , plan , regl , cul})
}




export const AddDate = async (req, res) => {
    const { body } = req;
    const { des, Date:jour} = body;
     const Hour = `${new Date().getHours() >= 10 ? new Date().getHours() : `0${new Date().getHours()}`}:${new Date().getMinutes() >= 10 ? new Date().getMinutes() : `0${new Date().getMinutes()}`}`;
    await DateModel.create({
        des,
        Date : jour , 
        Hour
    });
}




export const getAllDate= async (req,res)=>{
    const getAll = await DateModel.find()
     return res.json({all : getAll})
}