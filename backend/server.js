const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

// STORE BOOKINGS

let bookings = [];

// MIDDLEWARE

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// STATIC FILES

app.use(express.static(path.join(__dirname, '../')));

// HOME PAGE

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '../index.html'));

});

// BOOK SERVICE API

app.post('/book-service', (req, res) => {

    const bookingData = {

        fullname: req.body.fullname,
        phone: req.body.phone,
        village: req.body.village,
        service: req.body.service,
        date: req.body.date,
        time: req.body.time,
        address: req.body.address,

        status: "Pending"

    };

    // NEWEST BOOKING FIRST

    bookings.unshift(bookingData);

    console.log(bookings);

    res.send(`

        <h1>Service Booked Successfully</h1>

        <p>Thank you for booking with Sanjay Electronics.</p>

        <a href="/">Go Back Home</a>

    `);

});

// GET ALL BOOKINGS FOR OWNER PANEL

app.get('/get-bookings', (req, res) => {

    res.json(bookings);

});

// UPDATE BOOKING STATUS

app.post('/update-status', (req, res) => {

    const { index, status } = req.body;

    bookings[index].status = status;

    res.json({

        success: true

    });

});

// CONTACT FORM API

app.post('/contact-message', (req, res) => {

    console.log("Contact Message:");

    console.log(req.body);

    res.send(`

        <h1>Message Sent Successfully</h1>

        <p>Thank you for contacting Sanjay Electronics.</p>

        <a href="/">Go Back Home</a>

    `);

});

// START SERVER

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});