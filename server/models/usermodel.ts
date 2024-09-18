import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;

const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

interface User {
  username: string;
  password_hash: string;
}

interface QueryResponse {
  rows: User[];
}

const query = async (text: string, params: (string | number)[]): Promise<QueryResponse> => {
  console.log('executed query', text);
  const res = await pool.query(text, params);
  return res; 
};

export default {
  query,
};
