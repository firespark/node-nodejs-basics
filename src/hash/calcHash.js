import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const folderPath = import.meta.dirname;
    const filePath = `${folderPath}/files/fileToCalculateHashFor.txt`;

    const hash = createHash('sha256');
    const stream = await createReadStream(filePath);

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    stream.on('end', () => {
        console.log(hash.digest('hex'));
    });

    stream.on('error', (err) => {
        console.error(`Error reading file: ${err.message}`);
    });
};

await calculateHash();