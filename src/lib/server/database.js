import postgres from 'postgres';
import { POSTGRES_URL, POSTGRES_USERNAME, POSTGRES_PASSWORD, POSTGRES_PORT } from '$env/static/private';

const db = postgres(
    {
    host: POSTGRES_URL,
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    port: POSTGRES_PORT,
    database: 'LA2028'
}
)

export async function getTables(){
    const tables = await db`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`
    return tables;
}