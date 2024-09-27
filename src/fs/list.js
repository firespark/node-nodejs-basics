import * as fs from 'node:fs/promises';
import { existsSync } from 'node:fs';

const list = async () => {
    const folder = './files';

    if (!existsSync(folder)) throw ('FS operation failed');
    
    const files = await fs.readdir(folder)
    files.forEach(file => {
        console.log(file);
    });
};

await list();