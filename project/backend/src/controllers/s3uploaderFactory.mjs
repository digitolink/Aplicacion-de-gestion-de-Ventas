export function s3uploaderFactory(s3client, bucketName){
    return function(name, file, mimeType){
        //name, file y mimetype vienen del evento "file" del parser
        const s3Response = s3client.upload({
            Bucket: bucketName,
            Key: Date.now().toString()+name,
            Body: file,
            ContentType: mimeType
        })
        return {
            file:name,
            promise: s3Response.promise()
        }
    }


}