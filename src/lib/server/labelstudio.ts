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

export async function createTask(project_id: Number, url: string){
    console.log('Creating task for project: '+project_id+' with url: '+url);
    const task = await fetch(LABEL_STUDIO_URL + '/api/tasks/', {
        method: 'POST',
        headers: {
          'Authorization': 'Token ' + LABEL_STUDIO_API_ACCESSKEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'data': {
            'video_url': url
          },
          'project': 6
        })
      });
    if (!task.ok) {
        throw new Error('The error is: '+task.statusText + ' with status code: '+task.status);
    }
    let res = await task.json();
    return await res;
}
