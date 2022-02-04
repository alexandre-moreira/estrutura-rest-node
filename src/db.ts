import { Pool } from 'pg';

const connectionString = 'postgres://kvlbafko:t40PoQZQ9J6JTac26PeSbN-AaFmZb05j@kesavan.db.elephantsql.com/kvlbafko';

const db = new Pool ({ connectionString });

export default db;
