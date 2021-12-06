const express = require('express');
const page_router = express.Router();

// Login Page
page_router.get('/login', async(req, res) => {
    return res.render('login', { latout: false });
});

// Artist Profile Page
page_router.get('/artist-profile', async(req, res) => {
    return res.render('artist-profile');
});

module.exports = { page_router };