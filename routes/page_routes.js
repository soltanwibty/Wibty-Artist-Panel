const express = require('express');
const page_router = express.Router();

// Home Page
page_router.get('/', async(req, res) => {
    return res.redirect('/user/profile');
});

// Login Page
page_router.get('/login', async(req, res) => {
    return res.render('login', { layout: false });
});

// Artist Profile Page
page_router.get('/user/profile', async(req, res) => {
    return res.render('artist-profile');
});

// User Edit Page
page_router.get('/user/edit', async(req, res) => {
    return res.render('edit-profile');
});

// All Musics Statistics
page_router.get('/music/stats/all', async(req, res) => {
    return res.render('all-music-stats');
});

// Music Edit Page
page_router.get('/music/edit', async(req, res) => {
    return res.render('music-edit');
});

// All Albums Statistics
page_router.get('/album/stats/all', async(req, res) => {
    return res.render('all-album-stats');
});

// Album Edit Page
page_router.get('/album/edit', async(req, res) => {
    return res.render('album-edit');
});

// All Sale Statistics
page_router.get('/sales/stats', async(req, res) => {
    return res.render('sales-statistics');
});

// Handling All Error Pages

// =-> 400
page_router.use(function(req, res, next) {
    res.status(400);
    return res.render('errors/problem', { statusCode: 400, message: 'Xəta Yarandı', layout: false });
});

// =-> 403
page_router.use(function(req, res, next) {
    res.status(403);
    return res.render('errors/problem', { statusCode: 403, message: 'İcazə Yoxdur', layout: false });
});

// =-> 404
page_router.use(function(req, res, next) {
    res.status(404);
    return res.render('errors/problem', { statusCode: 404, message: 'Sorğu Tapılmadı', layout: false });
});

module.exports = { page_router };