import * as db from '$lib/server/database';

export async function load() {
    const tables = await db.getTables();
    console.log(tables);
    return {
        tables: tables
    }
}