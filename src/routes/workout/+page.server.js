import * as ls from '$lib/server/labelstudio';

export async function load() {
    const projects = await ls.get_projects();
    return { 
        projects: projects
    };
}

export const actions = {
    upload: async ({ cookies, request }) => {
        const body = await request.formData();
}
}