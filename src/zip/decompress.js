import { createUnzip } from 'node:zlib';
import { dirname, join } from 'path';
import { argv } from 'node:process';
import { createReadStream, createWriteStream } from 'fs';

export const decompress = async () => {
    const inputFile = join(dirname(argv[1]), 'files', 'archive.gz');
    const outputFile = join(dirname(argv[1]), 'files', 'fileToCompress.txt');
  
    const gunzip = createUnzip();
    const input = createReadStream(inputFile);
    const out = createWriteStream(outputFile);
  
    input.pipe(gunzip).pipe(out);
};

decompress();