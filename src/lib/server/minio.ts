import * as Minio from 'minio';
import { MINIO_URL, MINIO_PORT, MINIO_API_ACCESSKEY, MINIO_API_SECRETKEY } from '$env/static/private';
import { Stream } from 'stream';

const minioClient = new Minio.Client({
    endPoint: MINIO_URL,
    port: Number(MINIO_PORT),
    useSSL: false,
    accessKey: MINIO_API_ACCESSKEY,
    secretKey: MINIO_API_SECRETKEY
});

export async function listBuckets(){
    const buckets = await minioClient.listBuckets()
    return buckets;
}

export async function listObjects(bucketName: string){
    const objects = minioClient.listObjects(bucketName)
    return objects;
}

export async function uploadObject(bucketName: string, objectName: string, file: File){
    const stream = Stream.Readable.fromWeb(file.stream());
    const object = await minioClient.putObject(bucketName, 'raw_data/'+objectName, stream)
    return object;
}

export async function getPresignedUrl(bucketName: string, objectName: string){
    const url = await minioClient.presignedUrl('GET', bucketName, objectName)
    return url;
}