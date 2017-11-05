module.exports = {

    login: (req,res,next) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        console.log(req.body)
        db.get_user([username, password]).then( user => {
            console.log(user)
            if (user[0]) {
                req.session.user = {}
                req.session.user = user[0].username
                res.json(user[0])
            } else { 
                res.status(403).send("Incorrect username or password")
            }
        }).catch( console.log )
    },
    
    register: (req,res,next) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        db.get_user([username, password]).then( user => {
            console.log('user: ', user);
            if (user[0]) {
                req.session.user = {}
                req.session.user = user[0].username
                res.status(403).send("Username already taken")
            } else {
                db.register_user([username, password]).then( user => {
                    res.json("logged in sun!")
                })
            }
        }).catch( console.log )
    },

    logout: (req,res,next) => {
        req.session.destroy()
        res.json('logged out')
    }
}