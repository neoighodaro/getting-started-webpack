const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.use('/assets', express.static(path.join(__dirname, '/dist/assets')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
