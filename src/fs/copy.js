import {mkdir, readdir, copyFile} from 'node:fs/promises';
import { existsSync } from 'node:fs';

const copy = async () => {
    const folder = './files';
    const folderCopy = './files_copy';

    if (!existsSync(folder)) throw ('FS operation failed');
    if (existsSync(folderCopy)) throw ('FS operation failed');

    await mkdir(folderCopy);

    const files = await readdir(folder)
    files.forEach(file => {
        copyFile(`${folder}/${file}`, `${folderCopy}/${file}`);
    });

};

await copy();


