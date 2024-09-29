import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
    const folderPath = import.meta.dirname;
    const filePath = `${folderPath}/files/fileToCompress.txt`;
    const archivePath = `${folderPath}/files/archive.gz`;

    const gzip = createGzip();
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(archivePath);

    await readStream.pipe(gzip).pipe(writeStream);
};

await compress();