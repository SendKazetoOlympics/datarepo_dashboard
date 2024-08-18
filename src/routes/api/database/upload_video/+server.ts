import { insertVideo } from "$lib/server/database";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const start_time = BigInt(formData.get("start_time") as string);
    await insertVideo(name, start_time);
    const response = new Response(JSON.stringify({ status: "ok" }));
    return response;
}