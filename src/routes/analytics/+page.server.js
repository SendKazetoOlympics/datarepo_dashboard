import * as db from '$lib/server/database';
import * as minio from '$lib/server/minio';

export async function load() {
    const tables = await db.getTables();
    const buckets = await minio.listBuckets();
    console.log(tables);
    return {
        tables: tables,
        buckets: buckets
    }
}