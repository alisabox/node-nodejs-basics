import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { argv } from 'node:process';

export const read = async () => {
  const file = join(dirname(argv[1]), 'files', 'fileToRead.txt');

  try {
    if (!existsSync(file)) {
      throw new Error('FS operation failed');
    }
    const data = await readFile(file, 'utf-8', (err) => {
      if (err) throw new Error('FS operation failed');
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

read();