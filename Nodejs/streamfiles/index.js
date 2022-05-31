const http=require("http");
const fs=require("fs")

const server=http.createServer()

server.on('request', (req,res)=>{
    // fs.readFile("input.txt",(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // })

// const rstream=fs.createReadStream("input.txt");
// rstream.on('data',(data)=>{
//     res.write(data);
// });
// rstream.on('end',()=>{
//     res.end()
// })

// rstream.on('error',()=>{
//     res.end("file not found")
// })

const rstream=fs.createReadStream("input.txt");
rstream.pipe(res)
})

server.listen(3000,()=>{
    console.log("in port 3000!!!!!!!!!!");
})