import { uploadObject } from '$lib/server/minio';
import { json } from '@sveltejs/kit';

export async function POST({ request, cookies}) {
    const formData = await request.formData();
    const file: File = formData.get('file') as File;
    await uploadObject('highjump', file.name, file);
    const response = new Response(JSON.stringify({ status: "ok" }));
    return response;
}