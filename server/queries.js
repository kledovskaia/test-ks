import pg from 'pg'

const pool = new pg.Pool({
  // host: process.env.PGHOST,
  // database: process.env.PGDATABASE,
  // password: process.env.PGPASSWORD,
  // user: process.env.PGUSER,     
  // port: process.env.PGPORT,
  connectionString: process.env.PGURI,
  ssl: {
    rejectUnauthorized: false
  }
})

export const getCount = () => {
  pool.query('SELECT *, (SELECT COUNT(*) FROM cities) AS TotalNbRows FROM cities', (error, result) => {
    console.log({ rowCount: result.rowCount })
  })
}
// SELECT * FROM items WHERE id = $1
export const getCities = (request, response) => {
  getCount()
  pool.query('SELECT * FROM cities ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


export const createCity = (data) => {
  const { date, name, count, distance } = data
  pool.query(
    'INSERT INTO cities (date, name, count, distance) VALUES ($1, $2, $3, $4) RETURNING *', 
    [date, name, count, distance], 
    (error, results) => {
      if (error) {
        throw error
      }
      console.log(`City added with ID: ${results.rows[0].id}`)
    })
}