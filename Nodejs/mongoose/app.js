const mongoose = require("mongoose");
const validator = require("validator")

mongoose.connect("mongodb://localhost:27017/testdb")
    .then(() => console.log("connection successful...."))
    .catch((err) => console.log(err));

// const kSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     phoneno: Number,
//     active: Boolean
// })
const kSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    num: Number,
    email: {
        type: String,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error("Enter a valid Email");
        }
    }

})

const testdata = new mongoose.model("testdata", kSchema);// table

// // foe creating or inserting one document
// const createDoc = async () => {
//     try {
//         const react = new kardata({
//             name: "React JS",
//             phoneno: 23456,
//             active: true
//         })
//         const js = new kardata({
//             name: "JS",
//             phoneno: 23456,
//             active: true
//         })
//         const express = new kardata({
//             name: "express",
//             phoneno: 23456,
//             active: true
//         })
//         const result = await kardata.insertMany([react,js,express]);
//         console.log(result);
//     }
//     catch (err) {
//         console.log(err);

//     }
// }
// createDoc();
// const createDoc=asyn(()=>{
//     try{
//         const student= new kardata({
//             name:"swik",
//             phoneno:2134567,
//             active:true
//         })

//     }
//     catch(err){
//         console.log(err);
//     }
// })


// console.log(student)
// const getdocument= async()=>{
//     const result= await kardata.find({num:123})
//     .select({name:1,_id:0})
//     console.log(result);
// }
// getdocument();


// const getdocument=async()=>{
//     try{
//         const result=await kardatas
//         .find({$and:[{name:"React JS"},{phoneno:23456}]})
//         console.log(result)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// getdocument();


// const getdocument=async()=>{
//     try{
//         const result=await kardatas
//         .find({name:{$in :["React JS","express"]}})
//         console.log(result)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// getdocument();


// const getdocument = async () => {
//     try {
//         const result = await kardata
//             .find().sort({ name: 1 })
//         console.log(result)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// getdocument();


// const createDoc = async () => {
//     try {
//         const a = new testdata({
//             name: "abc",
//             num: 1234

//         })
//         const b = new testdata({
//             name: "bcd",
//             num: 23456

//         })
//         const c = new testdata({
//             name: "cde",
//             num: 789

//         })
//         const result = await testdata.insertMany([a, b, c]);
//         console.log(result);
//     }
//     catch (err) {
//         console.log(err);

//     }
// }
// createDoc();

// const getdocument = async () => {
//     try {
//         const result = await testdata.find({num:2345678999999997})
//             // .updateOne({name:"abc"},{num:2345678999999997}).skip(6)
//         .then(a=>{console.log(a);})
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// getdocument();

// const createDoc=async(()=>{
//         try{
//             const student= new testdata({
//                 name:"swik",
//                 num:2134567,
//                 email:"sdf@bnm"
//             })
//             const result = await student.save()
//                     console.log(result);
//         }
        
//         catch(err){
//             console.log(err);
//         }
//     })
// createDoc();

const student= new testdata({
    name:8542563,
    num:'fgvhj',
    email:"sdfbnm"
})
console.log(student);