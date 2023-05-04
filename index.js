const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


const chefs = require('./Data/Chefs.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Recipe is Running');
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedItems = chefs.find(r => r.id == id)
    res.send(selectedItems)
})

app.listen(port,  () => {
    console.log(`Recipe is running on ${port}`);
})