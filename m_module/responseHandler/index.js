

module.exports.responseHandler = async (req, res, next) => {
    res.status(200).json(req.response);    
    next()
}