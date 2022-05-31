const express = require('express');
const app = express();


// app.use((req, res) => {
//     console.log("hi");
//     res.send("<h1>i am in, Hello</h1> ");
// })

app.get('/r/:sub', (req, res) => {
    const { sub } = req.params;
    res.send(`Hey there!!!!!!${sub}`);
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`Hey there!!!!!!${q}............**********************`);
})

app.get('/r/:sub/:imp', (req, res) => {
    const { sub, imp } = req.params;
    res.send(`Hey there ${sub}!!!!!!${imp}`);
})

app.get('/cats', (req, res) => {

    res.send("Meoww!!!!!!");
})

app.get('/dogs', (req, res) => {

    res.send("bhoww!!!!!!");
})

app.get('/', (req, res) => {

    res.send("hehehehe!!!!!!");

})

app.get('*', (req, res) => {

    res.send("anything!!!!!!");


})
app.listen(3001, () => {
    console.log("listening to port 3000")
})