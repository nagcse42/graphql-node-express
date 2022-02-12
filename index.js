const express = require("express");
const app = express();
const PORT = 8080;
const userMockData = require("./mock-data.json");


app.listen(PORT, ()=>{
    console.log("Server running on port : "+PORT);
})