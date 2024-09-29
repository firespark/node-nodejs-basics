import { readFile } from 'node:fs/promises';

const read = async () => {
    const folderPath = import.meta.dirname;
    const file = `${folderPath}/files/fileToRead.txt`;

    try {
        const data = await readFile(file, 'utf8');
        console.log(data);
    }
    catch (err) {
        throw ('FS operation failed')
    }

};

await read();