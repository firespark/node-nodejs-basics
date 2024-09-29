import { Transform } from 'stream';
import { EOL } from 'os';

const transform = async () => {
    const reverseChunk = new Transform({
        transform(chunk, encoding, callback) {
            const result = chunk.toString().replace(EOL, '').split('').reverse().join('');
            callback(null, `${result}\n`);
        }
    });

    process.stdin.pipe(reverseChunk).pipe(process.stdout);
};

await transform();