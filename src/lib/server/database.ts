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

// export async function getTables(){
//     const tables = await db`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`
//     return tables;
// }

// export async function insertVideo(name: string, start_time: BigInt, camera: string){
//     name = 'raw_data/' + name;
//     const same_names = await db`SELECT * FROM videos WHERE name = ${name}` 
//     if (same_names.length > 0){
//         throw new Error('Video already exists');
//     }
//     else {
//         const video = await db`
//         INSERT INTO videos (id, name, start_time, camera) VALUES (gen_random_uuid(), ${name}, ${start_time}, ${camera.toLowerCase()})`
//         return video;
//     }
// }

// export async function selectVideosByDate(start_date: string, end_date: string){
//     const videos = await db`SELECT * FROM videos WHERE cast(to_timestamp(start_time/1000) as date) BETWEEN ${start_date} AND ${end_date} ORDER BY start_time DESC`
//     return videos;
// }

// export async function selectVideosByType(type: string){
//     const videos = await db`SELECT * FROM videos WHERE camera = ${type}`
//     return videos;
// }

// export async function selectVideoByName(name: string){
//     const video = await db`SELECT * FROM videos WHERE name = ${name}`
//     return video;
// }