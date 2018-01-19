const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT);

app.use(express.static(DIST_DIR));

console.log('app listening on port ', PORT);
app.get('*', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
});