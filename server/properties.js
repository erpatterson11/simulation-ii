module.exports = {
    getProperties: (req,res) => {
        const db = req.app.get('db')
        db.get_properties().then( props => res.json(props) )
    },

    addNewProperty: (req,res) => {
        const db = req.app.get('db')
        console.log('new prop body', req.body)
        db.add_new_property(req.body).then( response => res.json('added new property') )
    }
}