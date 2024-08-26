export async function handleSelectVideo(start_date: string, end_date: string): Promise<string[]> {
    let selected_videos: string[] = [];
    const formData = new FormData();
    formData.append('start_date', start_date);
    formData.append('end_date', end_date);
    const response = await fetch('/api/database/select_video', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        const result = await response.json();
        for (let video of result) {
            selected_videos.push(video.name);
            // let url = await getMinioUrl(video.name);

            // let task = await createLSTask(6, url, video.name);
            // console.log(task);
        }
        return selected_videos;
    } else {
        throw new Error('Failed to fetch data');
    }
}

export type VideoData = {
    id: number;
    name: string;
    start_time: string;
    type: string;
    camera: string;
    annotation_ids: string[];
}

export async function getVideoData(video_name: string): Promise<VideoData> {
    const formData = new FormData();
    formData.append('name', video_name);
    const response = await fetch('/api/database/select_video_by_name', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        const result = await response.json() as VideoData;
        return result;
    } else {
        throw new Error('Failed to fetch data');
    }
}