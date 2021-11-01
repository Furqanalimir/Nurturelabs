const User = require('../../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//register user/admin
exports.registerUser = async (req, res) => {
    try
    {
        const { name, email, isAdmin, password } = req.body;
        let user = await User.findOne({ email: email });

        if (user)
        {
            return res.status(400).json(`user already exists`);
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            name,
            email,
            isAdmin,
            password: hashedPassword,
        })
        await user.save();

        const payload = {
            user: {
                id: user._id,
                isAdmin: user.isAdmin
            }
        }

        const token = await jwt.sign(payload,
            process.env.SECRET_KEY,
            { expiresIn: '8h' },
        );

        return res.status(200).json({ token, id: user._id, isAdmin: user.isAdmin });
    }
    catch (err)
    {
        console.log(err)
        return res.status(500).json('Server error')
    }
}

//login user/admin
exports.loginUser = async (req, res) => {
    try
    {
        const { email, password } = req.body;
        let user = await User.findOne({ email: email });

        if (!user)
        {
            return res.status(401).json(`invalid credentials`);
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
        {
            return res.status(401).json('invalid credentials');
        }

        const payload = {
            user: {
                id: user._id,
                isAdmin: user.isAdmin
            }
        }

        const token = await jwt.sign(payload,
            process.env.SECRET_KEY,
            { expiresIn: '8h' },
        );

        return res.status(200).json({ token, id: user._id, isAdmin: user.isAdmin });
    }
    catch (err)
    {
        console.log(err)
        return res.status(500).json('Server error')
    }
}