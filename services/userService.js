const User = require('../models/User');

module.exports.get = async (req) => {
    req.response.data = await User.findOne({});
    return req
}

module.exports.logins = async (req) => {
    try {
        const logins = await User.findOne();
        return req;
    } catch (err) {
        return req;
    }
};

module.exports.register = async (req) => {
    console.log(req.body);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    
    try {
        const savedUser = await user.save();
        return req;
    } catch (err) {
        return req;
    }
};