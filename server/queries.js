import pg from 'pg'

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URI,
  ssl: {
    rejectUnauthorized: false
  }
})

const columnToEn = {
  'название': 'name',
  'количество': 'count',
  'расстояние': 'distance',
}

export const getCities = async ({ limit = 10, order, field, page = 0, search } = {}) => {
  let result = {};
  const query = (await pool.query('SELECT * FROM cities ORDER BY id ASC'))
  result.cities = query.rows
  
  if (field && order) {
    if (order === 'больше' || order === 'меньше') {
      result.cities = result.cities.sort((a, b) => {
        const aVal = a[columnToEn[field]]
        const bVal = b[columnToEn[field]]
        if (order === 'меньше') {
          return aVal > bVal ? 1 : aVal < bVal ? -1 : 0
        } else {
          return bVal > aVal ? 1 : bVal < aVal ? -1 : 0
        }
      })
      if (search) {
        if (order === 'меньше') {
          const targetIndex = result.cities.findIndex(el => {
            let value = el[columnToEn[field]]
            if (columnToEn[field] !== 'name') {
              value = +value
              search = +search
            }
            return value > search
          })
          result.cities = result.cities.slice(0, targetIndex)
        } else {
          const targetIndex = result.cities.findIndex(el => {
            let value = el[columnToEn[field]]
            if (columnToEn[field] !== 'name') {
              value = +value
              search = +search
            }
            return value < search
          })
          result.cities = result.cities.slice(0, targetIndex)
        }
      }
    } else {
      if (order === 'равно') {
        result.cities = result.cities.filter(el => el[columnToEn[field]].toString() === (search || '').toString())
      } else if (order === 'содержит') {
        result.cities = result.cities.filter(el => el[columnToEn[field]].toString().includes((search || '').toString()))
      }
    }
  }

  result.totalCount = result.cities.length
  result.cities = result.cities.slice(limit * +page, +limit * (+page + 1))

  return result
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