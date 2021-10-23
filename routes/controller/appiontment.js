const Advisor = require('../../model/advisor.js');
const Appiontment = require('../../model/appiontment.js');
const User = require('../../model/user');
const mongoose = require('mongoose');

//book  appiontment
exports.bookAppiontment = async (req, res) => {
    try
    {
        const { id } = req.user;
        const { time } = req.body;
        const advisorId = req.params.id;
        if (!advisorId)
        {
            return res.status(400).json("advisor Id is missing");
        }

        const appiontment = new Appiontment({
            userId: id,
            advisorId: advisorId,
            time
        })

        await appiontment.save();
        return res.status(200).json({ appiontment });
    }
    catch (err)
    {
        return res.status(500).json('Server error')
    }
}

//get  appiontment by user
exports.getAppiontment = async (req, res) => {
    try
    {
        const { id } = req.user;

        const appiontment = await Appiontment.find({ userId: id }).populate('advisorId', "name, photo_url");

        if (!appiontment)
        {
            return res.status(200).json('you have no appiontment booked yet!')
        }

        return res.status(200).json(appiontment);
    }
    catch (err)
    {
        console.log(err);
        return res.status(500).json('Server error')
    }
}

//get all appiontments 
exports.getAllAppiontment = async (req, res) => {
    try
    {
        const { id, isAdmin } = req.user;

        if (!isAdmin)
        {
            return res.status(403).json(`authorization denied`);
        }

        const appiontment = await Appiontment.find().populate('advisorId');

        if (!appiontment)
        {
            return res.status(200).json('No appiontments found');
        }

        return res.status(200).json({ appiontment });
    }
    catch (err)
    {
        console.log(err);
        return res.status(500).json('Server error')
    }
}

