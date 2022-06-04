import { rename as renameFile } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { argv } from 'node:process';

export const rename = async () => {
  const wrongFile = join(dirname(argv[1]), 'files', 'wrongFilename.txt');
  const properFile = join(dirname(argv[1]), 'files', 'properFilename.md');

  try {
    if (!existsSync(wrongFile) || existsSync(properFile)) {
      throw new Error('FS operation failed');
    }
    await renameFile(wrongFile, properFile, (err) => {
      if (err) throw new Error('FS operation failed');
    });
  } catch (err) {
    console.log(err);
  }
};

rename();