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
// page_router.get('/music/new', async(req, res) => {
//     return res.render('new-music');
// });

// All Musics Statistics
page_router.get('/music/stats/all', async(req, res) => {
    return res.render('all-music-stats');
});

// All Albums Statistics
page_router.get('/album/stats/all', async(req, res) => {
    return res.render('all-album-stats');
});

// All Sale Statistics
page_router.get('/sales/stats', async(req, res) => {
    return res.render('sales-statistics');
});


module.exports = { page_router };