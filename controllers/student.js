const studentSrc = require('../services/studentService')

module.exports.get = async (req, res, next) => {
    try {
        await studentSrc.get(req)
        next()
    }
    catch (err) {
        next(err)
    }
}

module.exports.create = async (req, res, next) => {
    try {
        await studentSrc.create(req)
        next()
    }
    catch (err) {
        next(err)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        await studentSrc.update(req)
        next()
    }
    catch (err) {
        next(err)
    }
}

module.exports.delete = async (req, res, next) => {
    try {
        await studentSrc.delete(req)
        next()
    }
    catch (err) {
        next(err)
    }
}

module.exports.uploadStudentDetails = async (req, res, next) => {
    try {
        await studentSrc.uploadStudentDetails(req)
        next()
    }
    catch (err) {
        next(err)
    }
}

module.exports.createPDF = async (req, res, next) => {
     console.log("create pdf API is called");
    return req;
}