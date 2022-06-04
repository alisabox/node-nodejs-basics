import { writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { argv } from 'node:process';

export const create = async () => {
  const content = 'I am fresh and young';
  const path = join(dirname(argv[1]), 'files', 'fresh.txt');

  try {
    if (existsSync(path)) {
      throw new Error('FS operation failed');
    }
    await writeFile(path, content);
  } catch (err) {
    console.log(err);
  }
};

create();