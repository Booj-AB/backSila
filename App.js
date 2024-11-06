import http from 'http'
import express from 'express'
import  RouterApp from './Router/Router.js'
import cors from "cors"
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import xlsx from 'xlsx'
import BookModel from './Model/Book.js'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const PORT  = 9400 
const app = express()
http.createServer(app)

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



app.use(bodyParser.json({limit:"1000mb"}))
app.use(bodyParser.urlencoded({extended:true , parameterLimit : 100000 ,  limit : '900mb'}))

app.use('/Images', express.static('Images'));
app.use('/Pdf', express.static( 'Pdf'));
// app.use('/Video', express.static(path.join(__dirname, 'Video')));
app.use(cors({origin : '*', credentials : true}))


app.use("/api/" ,  RouterApp)








// async function ath() {
//   const folderPath = 'C:/Users/7490/Downloads/liste des livres-20241103T221422Z-001/liste des livres/Etrangere';
  
//   try {

//     const files = await fs.promises.readdir(folderPath);
//     return files; 
//   } catch (err) {
//     console.error('Error reading folder:', err);
//     return []; 
//   }
// }



// ath()
//   .then(files => {
//     console.log('Retrieved files = > :', files); 
//     Convert(files)
//   })
//   .catch(err => {
//     console.error('Error:', err); 
//   });








// async function Convert(arr) {


 

//   try {
//    for (let i = 0; i < arr.length; i++) {
//       const filePath = `C:/Users/7490/Downloads/liste des livres-20241103T221422Z-001/liste des livres/Etrangere/${arr[i]}`;
//       console.log(arr[i].slice(-3));
      
//      if(arr[i].slice(-3) == 'ocx' || arr[i].slice(-3) == 'pdf' ) continue
    

//     const workbook = xlsx.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];


//     const data = xlsx.utils.sheet_to_json(worksheet, { defval: '' }); 

//     const filteredData = data.map(item => {

//       const editeurMatch = Object.keys(item)[0].match(/EDITEUR : (.+)/); 
//       return {
//         editeur: editeurMatch ? editeurMatch[1] : null,
//         titre: item['__EMPTY'] || '',
//         auteur: item['__EMPTY_1'] || '',
//         quantite: item['__EMPTY_2'] || '',
//         anneeEdition: item["__EMPTY_3"] || '',
//         prixDA: item['__EMPTY_4'] || '',
//         isbn: item['__EMPTY_5'] || '',
//         genre: item['__EMPTY_6'] || '',
//       };
//     });


//     await BookModel.insertMany(filteredData);
//     console.log(arr[i]);
//     console.log('is add '  , filteredData);
//     console.log('*************');
    
    
    
//    }

//   } catch (error) {
//     console.error('Error importing Excel file:', error);
//   } 
// }




























mongoose.connect("mongodb://127.0.0.1:27017/AppSila",)
.then(()=>{
  console.log('Data Base Cnx.....Done');
  
}).catch((err)=>{
     console.log(err);
     
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://10.0.2.2:${PORT}`);
});