const http=require("http")
const url=require("url")

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.end("got it..........")
})



server.listen(3005,()=>{
    console.log("In port 3005!!!!!!!!!!!");
})