const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send("Show QUIZ Home");
})

app.get('/home', (req, res) => {
    res.send("Home");
})

app.listen(PORT, () => {
    console.log("The server is running on port:",PORT);
    console.log(`Your backend URL: https://localhost:${PORT}`)
})