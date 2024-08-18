import { selectVideosByDate } from "$lib/server/database";

export async function POST({ request }) {
    const formData = await request.formData();
    const start_date = formData.get("start_date") as string;
    const end_date = formData.get("end_date") as string;
    const videos = await selectVideosByDate(start_date, end_date);
    const response = new Response(JSON.stringify(videos));
    return response;
}