import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { argv } from 'node:process';
import { stdout, exit } from 'process';

export const read = async () => {
  const file = join(dirname(argv[1]), 'files', 'fileToRead.txt');
  const readableStream = createReadStream(file);
  readableStream.on('data', (chunk) => {
    stdout.write(chunk);
    exit();
  });
};

read();