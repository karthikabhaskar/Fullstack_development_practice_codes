const fs=require("fs")

// fs.writeFile('read1.txt',"Asynchronous function......",()=>{
//     console.log("file is created")
// });

fs.readFile("read1.txt","utf-8",(err,data)=>{
    console.log(data)
})