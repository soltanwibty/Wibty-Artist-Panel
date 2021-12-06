const express = require('express');
const path = require('path');
const { page_router } = require('./routes');
const { engine } = require('express-handlebars');
const session = require('express-session');
var FileStore = require('session-file-store')(session);
require('dotenv').config();
const port = process.env.PORT || 4001;

const app = express();

// Logs Requests
app.use('/', async(req, res, next) => {
    console.log(`---| ${req.method} to ${req.path}`);
    next();
});

const fileStoreOptions = {
    path: path.join(__dirname, 'sessions')
}

// Session
app.use(session({
    name: process.env.SESSION_NAME,
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET_KEY,
    store: new FileStore(fileStoreOptions)
}))

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Routers
app.use(page_router);

// Listening event
app.listen(port, () => {
    console.log(`Wibty Artist Panel Started on ${port};`);
});

module.exports = app;