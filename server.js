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
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'table.html')));



app.get('/api/reserve', (req, res) => res.json(reservations));
app.get('/api/waitlist', (req, res) => res.json(waitlist));

app.post('/api/reservations', (req, res) => {
    
    const newReservation = req.body;
  
    if (reservations.length < 5) {
        reservations.push(newReservation);
    } else {
        waitlist.push(newReservation);
    }
  
    res.json(newReservation);
});






app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));