import express from 'express'
import mariaDB from 'mariadb'

const {pathname : root} = new URL('../app', import.meta.url)

const app = express();
const port = 3000;
const MARIADB_HOST = process.env.MARIADB_HOST;
const MARIADB_USER = process.env.MARIADB_USER;
const MARIADB_PASSWORD = process.env.MARIADB_PASSWORD;
const MARIADB_DATABASE = process.env.MARIADB_DATABASE;

const pool = mariaDB.createPool({
  host: MARIADB_HOST,
  user: MARIADB_USER,
  password: MARIADB_PASSWORD,
  database: MARIADB_DATABASE,
  connectionLimit: 5
});

async function getDBData(req, res) {
  let conn;
  try {
    conn = await pool.getConnection();
    const recipes = await conn.query("SELECT * FROM recipes");
    const response = {
          receipts: recipes,
          student: process.env.MARIADB_USER,
          created: new Date().toISOString(),
        }
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving data from database");
  } finally {
    if (conn) conn.end();
  }
}


app.use(express.static(`${root}/public`));
app.get("/api/recipes", getDBData);



(async () => {

  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
  });
})();