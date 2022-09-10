
module.exports.requestHandler = async (req, res, next) => {
    req.response = { success: true, error: false, data: [], message: '' }
    next()
}