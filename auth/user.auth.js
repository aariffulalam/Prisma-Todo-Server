const jwt = require('jsonwebtoken')

// login
exports.generateToken = (id) => {
    return jwt.sign(id, process.env.SECRECT_KEY)
}

// verifying that user login or not
exports.verifyToken = async (req, res, next) => {
    // const cookies = req.headers
    // console.log(cookies)
    const cookie = req.headers.cookie
    if (cookie) {
        const token = cookie.split('=')[1]
        const id = parseInt(jwt.verify(token, process.env.SECRECT_KEY))
        req.userId = id

        next()
    }
    else {
        res.status(401).json({ status: 'unathorized' })
    }

}