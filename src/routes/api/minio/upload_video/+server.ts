import { uploadObject } from '$lib/server/minio';
import { json } from '@sveltejs/kit';

export async function POST({ request, cookies}) {
    const formData = await request.formData();
    const file: File = formData.get('file') as File;
    const date: Date = new Date(Number(formData.get('lastModified')));
    await uploadObject('highjump', file.name, date, file);
    const response = new Response(JSON.stringify({ status: "ok" }));
    return response;
}