import { unlink } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { argv } from 'node:process';

export const remove = async () => {
  const file = join(dirname(argv[1]), 'files', 'fileToRemove.txt');
    
  try {
    if (!existsSync(file)) {
      throw new Error('FS operation failed');
    }
    await unlink(file, (err) => {
      if (err) throw new Error('FS operation failed');
    });
  } catch (err) {
    console.log(err);
  }
};

remove();