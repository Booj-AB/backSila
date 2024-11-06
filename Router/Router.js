import express from "express"
import { AddDate, AddImageVd, AddMessage, AddMots, addNew, AddPar, AddPdf, chnageP, getAllBook, getAllDate, getAllImageVd, getAllMots, getAllNew, getAllPar, getByCatImageVd, getMessage, getPdfByCat, getProg } from "../Controllers.js"
import multer from 'multer'

const RouterApp = express.Router()


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Images');
  },
  filename: function (req, file, cb) {
    console.log( "d ",file);
    cb(null, Date.now() + path.extname(file.originalname));
  }
});


const upload = multer({ storage: storage });


 // Message : 
 RouterApp.post('/addMessage', AddMessage)
 RouterApp.get('/getAllMessages' , getMessage )

 // Add Image & Vd & Podcast : 
  RouterApp.post('/AddImageVdPo' ,AddImageVd )
  RouterApp.get('/getImageVdPo' , getAllImageVd)
  RouterApp.get('/getByCatImageVdPo' , getByCatImageVd)

  // add new 

  RouterApp.post('/AddNew',upload.single('Image') ,addNew )
  RouterApp.get('/getNew' , getAllNew)


  // add Mots

  RouterApp.post('/AddMots',upload.single('Image') ,AddMots )
  RouterApp.get('/getMots' , getAllMots)



  // add Partenanires : 

  RouterApp.post('/AddParAndSponsor' ,AddPar)
  RouterApp.get('/getParAndSponsor' , getAllPar)



  // get Book 
  RouterApp.get('/getBook' ,getAllBook )

  // Add Pdf 
    RouterApp.post('/AddPdf', upload.single('Image') ,AddPdf)
    RouterApp.get('/getPdf' , getPdfByCat)

      // Add Date
    RouterApp.post('/AddDate' ,AddDate)
    RouterApp.get('/getDate' , getAllDate)

      RouterApp.post('/UpdatePro' ,chnageP)
    RouterApp.get('/getPro' , getProg)


export default RouterApp