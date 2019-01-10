const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/assets', express.static(path.join(__dirname, '/dist/assets'), { maxAge: '30d' }));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
