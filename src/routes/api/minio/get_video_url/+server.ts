import { getPresignedUrl } from "$lib/server/minio";

export async function POST({ request }) {
    const formData = await request.formData();
    const filename = formData.get("objectName") as string;
    const url = await getPresignedUrl("highjump", filename);
    const response = new Response(JSON.stringify({ url }));
    return response;
}