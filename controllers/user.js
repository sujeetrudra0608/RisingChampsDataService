const userSrc = require('../services/userService')

module.exports.get = async (req, res, next) => {
    try {
        await userSrc.get(req)
        next()
    }
    catch (err) {
        next(err)
    }
}

module.exports.logins = async (req, res, next) => {
    try {
        await userSrc.logins(req)
        next()
    }
    catch (err) {
        next(err)
    }
}

module.exports.register = async (req, res, next) => {
    try {
        await userSrc.register(req)
        next()
    }
    catch (err) {
        next(err)
    }
}