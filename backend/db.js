const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: '0000',
    host: 'localhost',
    port: 5432,
    database: 'tmm'
})

module.exports = {
    query: (text, params) => pool.query(text, params)
}