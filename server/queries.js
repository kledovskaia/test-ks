import pg from 'pg'

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URI,
  ssl: {
    rejectUnauthorized: false
  }
})

export const getCount = () => {
  pool.query('SELECT *, (SELECT COUNT(*) FROM cities) AS TotalNbRows FROM cities', (error, result) => {
    console.log({ rowCount: result.rowCount })
  })
}

const columnToEn = {
  'название': 'name',
  'количество': 'count',
  'расстояние': 'distance',
}

// SELECT * FROM items WHERE id = $1
export const getCities = async (requestParams) => {
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