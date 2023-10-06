const db = require('../db')

class UserController {
    async getUsers(req, res) {
        const users = await db.query('SELECT  * from user')
        res.json(users.rows)
    }
}

module.exports = new UserController()