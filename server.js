const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//This array will hold the reservations (5 max).
const reservations = []

//After the reservations are full(5 max), this array will hold the customers on the waitlist.
const waitlist = []

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));





app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));