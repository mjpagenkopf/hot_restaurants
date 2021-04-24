const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));





app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));