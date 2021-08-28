import { Pool } from "pg";

const pool = new Pool();

export async function getCities() {
  let sql = `select * from "Cities" order by "Name"`;
  return (await pool.query(sql)).rows;
}

export async function getRecords(cityId) {
  let sql = `select * from "Records" where "CityId" = $1`;
  return (await pool.query(sql, [cityId])).rows;
}
