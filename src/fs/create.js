import {writeFile} from 'node:fs/promises';
import { existsSync } from 'node:fs';

const create = async () => {
    const folderPath = import.meta.dirname;
    const file = `${folderPath}/files/fresh.txt`;

    if (existsSync(file)) throw ('FS operation failed');

    await writeFile(file, 'I am fresh and young');

};

await create();