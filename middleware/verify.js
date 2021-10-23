const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports = function (req, res, next) {

    const token = req.header('x-auth-token');
    try
    {
        if (!token)
        {
            return res.status(401).send('authorization denied!')
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decode.user;
        next();

    } catch (err)
    {
        return res.status(401).send('Invalid Token');
    }
}