import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { argv } from 'node:process';
import { stdin, exit } from 'process';

export const write = async () => {
  const file = join(dirname(argv[1]), 'files', 'fileToWrite.txt');

  const writableStream = createWriteStream(file);
  stdin.on('data', data => {
    writableStream.write(data);
    exit();
  });
};

write();
