import { json } from '@sveltejs/kit';

export async function POST({ request, cookies}) {
    const formData = await request.formData();
    console.log(formData);
    return json({ status: 'ok' });
}