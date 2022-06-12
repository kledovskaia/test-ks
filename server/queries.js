import pg from 'pg'

const pool = new pg.Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  user: process.env.PGUSER,     
  port: process.env.PGPORT,
})

export const getItems = (request, response) => {
  pool.query('SELECT * FROM items ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// SELECT * FROM items WHERE id = $1