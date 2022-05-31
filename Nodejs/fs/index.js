const fs=require("fs");

fs.writeFileSync("read.txt","Welcome to nodejs");
fs.appendFileSync("read.txt","Hellooooo...........")

// const data=fs.readFileSync("read.txt")
// const data1=data.toString()


const data=fs.readFileSync("read.txt","utf8")

console.log(data);