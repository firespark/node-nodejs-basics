import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const list = async () => {
    const folderPath = import.meta.dirname;
    const folder = `${folderPath}/files`;

    if (!existsSync(folder)) throw ('FS operation failed');
    
    const files = await readdir(folder)
    files.forEach(file => {
        console.log(file);
    });
};

await list();