import { readFile } from 'fs/promises';
import { URL } from 'url';
import * as path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(
        await readFile(
          new URL('./files/a.json', import.meta.url)
        )
    );
} else {
    unknownObject = JSON.parse(
        await readFile(
          new URL('./files/b.json', import.meta.url)
        )
    );
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${new URL('', import.meta.url).pathname}`);
console.log(`Path to current directory is ${new URL('.', import.meta.url).pathname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer };

