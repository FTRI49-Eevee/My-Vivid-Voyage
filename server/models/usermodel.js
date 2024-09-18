import { Pool } from 'pg';
const PG_URI = 'postgresql://postgres.qpzamvtwqrdmrgaotors:lyrerae4q0ZhK3X2@aws-0-us-west-1.pooler.supabase.com:6543/postgres';
const pool = new Pool({
    connectionString: PG_URI,
});
module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    },
};
