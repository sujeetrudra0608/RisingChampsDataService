const userRouter = require('./user')
const studentRouter = require('./student')

module.exports.routes = [
    {
        path: '/api/users',
        router: userRouter
    },
    {
        path: '/api/students',
        router: studentRouter
    }
] 