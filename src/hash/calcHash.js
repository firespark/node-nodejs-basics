import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const filePath = './files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
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