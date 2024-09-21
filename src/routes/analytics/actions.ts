export type VideoData = {
    id: number;
    name: string;
    start_time: string;
    type: string;
    camera: string;
    annotation_ids: string[];
}

export async function handleSelectVideo(start_date: string, end_date: string): Promise<VideoData[]> {
    let selected_videos: VideoData[] = [];
    const formData = new FormData();
    formData.append('start_date', start_date);
    formData.append('end_date', end_date);
    const response = await fetch('http://kazeserver/flask/database/select_video_by_date', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        const result = await response.json();
        console.log(result);
        for (let video of result['videos']) {
            selected_videos.push(video as VideoData);
            // let url = await getMinioUrl(video.name);

            // let task = await createLSTask(6, url, video.name);
            // console.log(task);
        }
        return selected_videos;
    } else {
        throw new Error('Failed to fetch data');
    }
}

