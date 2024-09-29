import { rename as renameFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const rename = async () => {
    const folderPath = import.meta.dirname;
    const wrongFile = `${folderPath}/files/wrongFilename.txt`;
    const properFile = `${folderPath}/files/properFilename.md`;

    if (!existsSync(wrongFile)) throw ('FS operation failed');
    if (existsSync(properFile)) throw ('FS operation failed');

    await renameFile(wrongFile, properFile);
};

await rename();