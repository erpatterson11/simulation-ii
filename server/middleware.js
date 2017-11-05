module.exports = {
    checkAuth: (req,res,next) => {
        const { username } = req.body
        if (req.session.user.username == username) {
            next()
        } else {
            res.status(403).redirect('/login')
        }
    }
}