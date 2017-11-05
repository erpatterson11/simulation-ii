const express = require('express'),
      cors = require('cors'),
      { json } = require('body-parser'),
      session = require('express-session'),
      massive = require('massive'),
      config = require('./config'),
      port = 3005

const app = express()

app.use(cors())
app.use(json())
app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized: false
}))

massive(config.connectionString).then( db => app.set('db', db))

const userController = require('./users')
const propertiesController = require('./properties')
const middleware = require('./middleware')

app.post('/api/login',userController.login)
app.post('/api/register',userController.register)
app.post('/api/logout', userController.logout)

app.get('/api/properties', propertiesController.getProperties)
app.post('/api/properties', propertiesController.addNewProperty)

app.post('/api/test',middleware.checkAuth, (req,res,next) => {
    res.json('passed!')
})


console.log(app.get('db'))







app.listen(port, () => console.log(`Listening on ${port}`))