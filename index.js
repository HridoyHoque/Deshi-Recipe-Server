const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Recipe is Running');
})

app.listen(port,  () => {
    console.log(`Recipe is running on ${port}`);
})