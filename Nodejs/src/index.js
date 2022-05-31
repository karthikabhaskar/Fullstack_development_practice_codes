const express = require("express");
const app = express();
const path = require('path')



const css = path.join(__dirname, "../express");

app.use(express.static(css));


app.get('/', (req, res) => {
    res.send();
})

app.listen(3001, () => {
    console.log("In port 3001!!!!!!!!!!!!");
}
)