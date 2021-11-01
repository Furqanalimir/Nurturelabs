const router = require('express').Router();

//@ GET /
//@ info about api routes
//@access public

router.get('/', (req, res) => {
    const info = [
        "apart from register and login, routes are proteced please create account or login",
        "if something goes wrong, please contact: mirfurqan89@gmail.com",
        "below info is about routes and required fields etc"
    ]

    const register = [ {
        'type': "POST",
        'route': "http://localhost:5000/api/user/register",
        'body': "name, email, password, isAdmin(optional)",
        'desc': "register user or admin"
    } ]

    const login = [ {
        'type': "POST",
        'route': "http://localhost:5000/api/user/login",
        'body': "email, password",
        'desc': "login user or admin"
    } ]


    const advisor = [ {
        'type': "POST",
        'route': "http://localhost:5000/api/advisor",
        'body': "name, photo_url",
        'desc': "add advisor"
    },
    {
        'type': "GET",
        'route': "http://localhost:5000/api/advisor",
        'desc': "get all advisor"
    } ]

    const appiontment = [ {
        'type': "POST",
        'route': "http://localhost:5000/api/appiontment/:id",
        'body': "time (eg: '11-12-2021')",
        'params': 'advisor id',
        'desc': "book appiontment at time"
    },
    {
        'type': "GET",
        'route': "http://localhost:5000/api/appiontment/",
        'desc': "get all booked appiontment by user",
    },
    {
        'type': "GET",
        'route': "http://localhost:5000/api/appiontment/all",
        'desc': "get all booked appiontment booked by users [admin auth required]",
    }
    ]

    return res.status(200).json({
        info,
        register,
        login,
        advisor,
        appiontment
    });


});

module.exports = router;