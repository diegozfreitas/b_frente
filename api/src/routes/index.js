var user = require('../controllers/user');


module.exports = (app) => {
    app.get('/user/list', user.getAll )
    app.get('/', (req, res) => res.status(200).json({ status: "os" }))
}