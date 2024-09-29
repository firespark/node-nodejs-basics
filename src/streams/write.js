import { createWriteStream } from 'node:fs';

const write = async () => {
    const folderPath = import.meta.dirname;
    const filePath = `${folderPath}/files/fileToWrite.txt`;

    const stream = await createWriteStream(filePath);

    process.stdin.on('data', (chunk) => {
        stream.write(chunk);
    });
};

await write();