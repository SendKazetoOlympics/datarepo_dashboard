import * as ls from '$lib/server/labelstudio';

export async function load() {
    const projects = await ls.get_projects();
    return { 
        projects: projects
    };
}