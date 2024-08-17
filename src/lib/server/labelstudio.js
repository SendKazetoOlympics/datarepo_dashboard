import { LABEL_STUDIO_URL, LABEL_STUDIO_API_ACCESSKEY } from '$env/static/private';

export async function get_projects(){
    const project_list = await fetch(LABEL_STUDIO_URL+'/api/projects/', {
        headers: {
            'Authorization': 'Token  ' + LABEL_STUDIO_API_ACCESSKEY
        }
        })
    if (!project_list.ok) {
        throw new Error('Failed to fetch project list');
    }
    let res = await project_list.json();
    return await res;
}