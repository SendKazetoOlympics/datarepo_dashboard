import { selectVideoByName } from "$lib/server/database";

export async function POST({ request }) {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const videos = await selectVideoByName(name);
    const response = new Response(JSON.stringify(videos));
    return response;
}