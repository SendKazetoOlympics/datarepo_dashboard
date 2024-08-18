import postgres from 'postgres';
import { POSTGRES_URL, POSTGRES_USERNAME, POSTGRES_PASSWORD, POSTGRES_PORT } from '$env/static/private';

const db = postgres("",
    {
    host: POSTGRES_URL,
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    port: Number(POSTGRES_PORT),
    database: 'LA2028'
}
)

export async function getTables(){
    const tables = await db`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`
    return tables;
}

export async function insertVideo(name: string, start_time: BigInt){
    name = 'raw_data/' + name;
    const same_names = await db`SELECT * FROM videos WHERE name = ${name}` 
    if (same_names.length > 0){
        throw new Error('Video already exists');
    }
    else {
        const video = await db`
        INSERT INTO videos (id, name, start_time) VALUES (gen_random_uuid(), ${name}, ${start_time})`
        return video;
    }
}