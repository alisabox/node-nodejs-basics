import { readdir } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { argv } from 'node:process';

export const list = async () => {
    const filesDir = join(dirname(argv[1]), 'files');
  
    try {
      if (!existsSync(filesDir)) {
        throw new Error('FS operation failed');
      }
  
      const files =  await readdir(filesDir);
      files.map(async (file) => console.log(file), (err) => {
        if (err) throw new Error('FS operation failed');
      });
    } catch (err) {
      console.log(err);
    }
};

list();