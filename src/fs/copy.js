import * as fs from 'node:fs/promises';
import { existsSync } from 'node:fs';

const copy = async () => {
    const folder = './files';
    const folderCopy = './files_copy';

    if (!existsSync(folder)) throw ('FS operation failed');
    if (existsSync(folderCopy)) throw ('FS operation failed');

    await fs.mkdir(folderCopy);

    const files = await fs.readdir(folder)
    files.forEach(file => {
        fs.copyFile(`${folder}/${file}`, `${folderCopy}/${file}`);
    });

};

await copy();


