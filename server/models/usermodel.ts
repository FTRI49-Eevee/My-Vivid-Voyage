import pg from 'pg';

const { Pool } = pg;

const PG_URI = 'postgresql://postgres.rmtrdyqoemlxzavpvpih:MjcX1GTJLl1jdx0R@aws-0-us-west-1.pooler.supabase.com:6543/postgres';

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
