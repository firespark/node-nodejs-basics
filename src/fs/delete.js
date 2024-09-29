import { unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const remove = async () => {
    const folderPath = import.meta.dirname;
    const file = `${folderPath}/files/fileToRemove.txt`;
    
    if (!existsSync(file)) throw ('FS operation failed');
    await unlink(file);
};

await remove();