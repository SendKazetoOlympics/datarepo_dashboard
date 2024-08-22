import { createTask } from "$lib/server/labelstudio";

export async function POST({ request}) {
    const formData = await request.formData();
    const project_id = Number(formData.get("project_id") as string);
    const url = formData.get("url") as string;
    const file_name = formData.get("file_name") as string;
    const task = await createTask(project_id, url, file_name);
    const response = new Response(JSON.stringify({ status: 'success', task }));
    return response;
}
