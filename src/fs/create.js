import {writeFile} from 'node:fs/promises';
import { existsSync } from 'node:fs';

const create = async () => {
    const file = './files/fresh.txt';

    if (existsSync(file)) throw ('FS operation failed');

    await writeFile(file, 'I am fresh and young');

};

await create();