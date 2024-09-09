// authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token; // Token'ı cookie'den al

  if (!token) return res.sendStatus(401); // Token yoksa yetkisiz

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Token geçersizse yasak

    req.user = user;
    next(); // İstek devam etsin
  });
};


module.exports = authenticateToken
