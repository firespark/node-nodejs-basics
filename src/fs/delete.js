import * as fs from 'node:fs/promises';
import { existsSync } from 'node:fs';

const remove = async () => {
    const file = './files/fileToRemove.txt';
    
    if (existsSync(file)) throw ('FS operation failed');
    await fs.unlink(file);
};

await remove();