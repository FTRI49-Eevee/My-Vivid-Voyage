import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const { Pool } = pg;
const PG_URI = process.env.PG_URI;
const pool = new Pool({
    connectionString: PG_URI,
});
const query = async (text, params) => {
    console.log('executed query', text);
    const res = await pool.query(text, params);
    return res;
};
export default {
    query,
};
