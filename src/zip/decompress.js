import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

const compress = async () => {
    const folderPath = import.meta.dirname;
    const filePath = `${folderPath}/files/fileToCompress.txt`;
    const archivePath = `${folderPath}/files/archive.gz`;

    const unzip = createUnzip();
    const readStream = createReadStream(archivePath);
    const writeStream = createWriteStream(filePath);

    await readStream.pipe(unzip).pipe(writeStream);
};

await compress();