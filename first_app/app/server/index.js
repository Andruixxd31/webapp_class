// server/index.js
const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 3001;
const app = express();

const newPet = {
    "pet4": {
        "name": "Santa's helper",
        "type": "dog",
        "owner": "Bart Simpson",
        "color": "brown",
        "id": 4
    }
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server side!"});
});

app.get("/api/pets", (req, res) => {
    fs.readFile(__dirname + "/" + "pets.json", "utf8", (err, data) => {
        console.log(data);
        res.end(data);
    })
});

app.post("/api/newPet", (req, res) => {
    fs.readFile( __dirname + "/" + "pets.json", "utf8", (err, data) => {
        data = JSON.parse(data);
        data["pet4"] = newPet["pet4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
});

