import { createGzip } from 'node:zlib';
import { dirname, join } from 'path';
import { argv } from 'node:process';
import { createReadStream, createWriteStream } from 'fs';

export const compress = async () => {
  const inputFile = join(dirname(argv[1]), 'files', 'fileToCompress.txt');
  const outputFile = join(dirname(argv[1]), 'files', 'archive.gz');

  const gzip = createGzip();
  const input = createReadStream(inputFile);
  const out = createWriteStream(outputFile);

  input.pipe(gzip).pipe(out);
};

compress();