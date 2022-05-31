const fs=require("fs")

fs.writeFile("read.txt","Hello............. Welcome to my file!!!!!!",(err)=>{
  console.log("inserted successfully.............");
})

// fs.appendFile("read.txt","Hi i am there.......",(err)=>{
//     console.log("data appended!!!!!!!!!!");
// })


// fs.readFile("read.txt","utf-8",(err,data)=>{
//     console.log(data);
// })


// fs.rename("read.txt","read1.txt",(err)=>{
//     console.log("renamed successfully............");
// })