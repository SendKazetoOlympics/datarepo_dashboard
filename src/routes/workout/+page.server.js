import { LABEL_STUDIO_API_ACCESSKEY } from '$env/static/private';

export async function load() {
    const project_list = await fetch('http://192.168.0.103:8084/api/projects/', {
        headers: {
            'Authorization': 'Token  ' + LABEL_STUDIO_API_ACCESSKEY
        }
        })
    if (!project_list.ok) {
        throw new Error('Failed to fetch project list');
    }
    let res = await project_list.json();
    console.log(res)
    return await res;

}