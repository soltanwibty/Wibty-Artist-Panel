const jwt = require('jsonwebtoken');

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET);
}

function authenticateToken(req, res, next) {
    const authHeader = req.session.user.token
    const token = authHeader && authHeader.split(' ')[1]

    console.log('authHeader ' + authHeader);
    console.log('token ' + token);

    if (token == null) return res.redirect('/login');

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err || !user) return res.redirect('/login');

        req.session.user = user;
        next();
    })
}

module.exports = {
    generateAccessToken,
    authenticateToken
}