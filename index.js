const fs = require("fs");
const express = require("express");

var datetime = new Date();
var fileName = datetime.toISOString().slice(0,13) + "." + datetime.toISOString().slice(14, 16);

const app = express();
const port = 3000;

app.listen(port, () =>{
    console.log(`server running port ${port}`);
});


fs.writeFile('./test.txt', fileName, err => {
    if (err){
        console.error(err)
        return
    }
    console.log("the file has been saved");

});

app.get(`/${fileName}`, (req, res) => {
    fs.readFile(`${fileName}.txt`, "utf-8", (err, data) =>{
        if (err) throw err;
        res.send(data);
    });
});

app.get("/", (req, res) =>{
    fs.readdir("./", (err, files) => {
        if (err) throw err;
        res.send(files);
    });
});