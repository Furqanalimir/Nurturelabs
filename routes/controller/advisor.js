const Advisor = require('../../model/advisor');

//add  advisor
exports.addAdvisor = async (req, res) => {
    try
    {
        const { id, isAdmin } = req.user;
        const { name, photo_url } = req.body;
        if (!isAdmin)
        {
            return res.status(403).json("you are not authorized!");
        }

        let advisor = new Advisor({
            adminId: id,
            name,
            photo_url,
        })
        await advisor.save();

        return res.status(200).json("advisor added!");
    }
    catch (err)
    {
        return res.status(500).json('Server error')
    }
}


//get all  Advisor
exports.getAdvisor = async (req, res) => {
    try
    {
        let advisor = await Advisor.find();

        return res.status(200).json({ advisor });
    }
    catch (err)
    {
        console.log(err)
        return res.status(500).json('Server error')
    }
}
