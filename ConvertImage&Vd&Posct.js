import { writeFile } from "fs/promises";

export default async  function saveFile(url , type){
   if(type == 'Image'){
    

    
        const filename = FunctionfileName(20)
        let path = `C:/Users/7490/Desktop/BackSila/Images/${filename}.png`
        await writeFile(path, urltoArrayBuffer({ url }));
        return `${filename}.png`
   }
   else if(type == 'Pdf'){
        const filename = FunctionfileName(20)
       let path = `C:/Users/7490/Desktop/BackSila/Pdf/${filename}.pdf`
       await writeFile(path, urltoArrayBuffer({ url , type}));
       return `${filename}.pdf`
   }else{
    console.log('ssss');
    
       const filename = FunctionfileName(20)
       let path = `C:/Users/7490/Desktop/BackSila/Video/${filename}.mp4`
       await writeFile(path, urltoArrayBuffer({ url , type}));
       return `${filename}.mp4`
   }
}
 const urltoArrayBuffer = ({ url ,type }) => {
    if(type == "Image"){
         var data = url.replace(/^data:image\/\w+;base64,/, "");
         return Buffer.from(data, "base64");
    }else if(type == 'Pdf'){
            // const data = base64Data.replace(/^data:application\/pdf;base64,/, "");
             return Buffer.from(url, "base64");
    }else{
        var data = url.replace( /^data:video\/\w+;base64,/, "");
        return Buffer.from(data, "base64");
    }
};
 function  FunctionfileName(num) {
      let Booj = "jlehdedejhdehfghd54767UJDHDE047RHyuhff7665fgVgf54FIJDERHJ" 
      let id = ''
      for (let i = 0; i < num; i++) {
       let rand = Math.floor(Math.random()* Booj.length)
       id += Booj[rand]
      }
      return id
 }