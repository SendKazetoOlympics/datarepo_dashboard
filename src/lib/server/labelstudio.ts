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

export async function create_task(project_id: Number, url: string){
    const task = await fetch(LABEL_STUDIO_URL+'/api/projects/'+project_id+'/tasks/', {
        method: 'POST',
        headers: {
            'Authorization': 'Token  ' + LABEL_STUDIO_API_ACCESSKEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'data': {
                'video': url
            },
            'project': project_id
        })
    }
    )
    if (!task.ok) {
        throw new Error('Failed to create task');
    }
    let res = await task.json();
    return await res;
}
