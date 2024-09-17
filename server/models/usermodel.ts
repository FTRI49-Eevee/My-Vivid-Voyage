import { Pool } from 'pg';

const PG_URI = 'PG_URI string';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (
    text: string,
    params: [],
    callback: (err: Error, result: unknown) => void
  ) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
