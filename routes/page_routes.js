const express = require('express');
const page_router = express.Router();

// Login Page
page_router.get('/login', async(req, res) => {
    return res.render('login', { layout: false });
});

// Artist Profile Page
page_router.get('/user/profile', async(req, res) => {
    return res.render('artist-profile');
});

// Adding New Album Page
page_router.get('/music/new', async(req, res) => {
    return res.render('new-music');
});

// Musics Statistics
page_router.get('/music/stats/all', async(req, res) => {
    return res.render('all-music-stats');
});

module.exports = { page_router };