import { mkdir, readdir, copyFile } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { argv } from 'node:process';

export const copy = async () => {
  const filesDir = join(dirname(argv[1]), 'files');
  const filesCopyDir = join(dirname(argv[1]), 'files_copy');

  try {
    if (!existsSync(filesDir) || existsSync(filesCopyDir)) {
      throw new Error('FS operation failed');
    }
    await mkdir(filesCopyDir, { recursive: true }, (err) => {
      if (err) throw new Error('FS operation failed');
    });

    const files =  await readdir(filesDir);
    files.map(async (file) => await copyFile(join(filesDir, file), join(filesCopyDir, file)), (err) => {
      if (err) throw new Error('FS operation failed');
    });
  } catch (err) {
    console.log(err);
  }
};

copy();