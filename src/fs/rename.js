import * as fs from 'node:fs/promises';
import { existsSync } from 'node:fs';

const rename = async () => {
    const wrongFile = './files/wrongFilename.txt';
    const properFile = './files/properFilename.md';

    if (!existsSync(wrongFile)) throw ('FS operation failed');
    if (existsSync(properFile)) throw ('FS operation failed');

    await fs.rename(wrongFile, properFile);
};

await rename();