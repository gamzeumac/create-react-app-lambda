const express = require('express');
const app = express();
const port = 4000;
 
app.get('/', (req, res) => {
    res.send(`
    <h1>Information</h1>
    <p>Node version: ${process.versions.node}</p>
    `);
});
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});