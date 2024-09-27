import * as fs from 'node:fs/promises';

const read = async () => {
    const file = './files/fileToRead.txt';
    
    try {
        const data = await fs.readFile(file, 'utf8');
        console.log(data);
      } 
      catch (err) {
        throw ('FS operation failed')
      }

};

await read();