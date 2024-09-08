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

export async function uploadObject(bucketName: string, objectName: string, date: Date, file: File){
    const stream = Stream.Readable.fromWeb(file.stream());
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const day = date.getDate().toString().padStart(2, '0');
    const object = await minioClient.putObject(bucketName, 'raw_data/'+year+'/'+month+'/'+day+'/'+objectName, stream)
    return object;
}

export async function getPresignedUrl(bucketName: string, objectName: string){
    const url = await minioClient.presignedGetObject(bucketName, objectName)
    return url;
}