const express = require('express');
const app = express();

app.set('view engine','ejs')

app.get('/',(req, res) => {
    res.render('home.ejs',{
        name:"karthika"
    })
})

// app.get('/about',(req, res) => {
//     res.send({
//         id: 1,
//         name: 'karthika'
//     })
// })


// app.get('*',(req, res) => {
//     res.send([{
//         id: 1,
//         name: 'karthika'
//     },
//     {
//         id: 1,
//         name: 'karthika'
//     },
//     {
//         id: 1,
//         name: 'karthika'
//     },
//     {
//         id: 1,
//         name: 'karthika'
//     }])
// })

// app.get('*',(req, res) => {
//     res.send([{
//         id: 1,
//         name: 'karthika'
//     },
//     {
//         id: 1,
//         name: 'karthika'
//     },
//     {
//         id: 1,
//         name: 'karthika'
//     },
//     {

//     },
//     {

//     },
//     {
//         id: 1,
//         name: 'karthika'
//     }])
// })



app.listen(3000, () => {
    console.log("i am in port 3000*******");
})