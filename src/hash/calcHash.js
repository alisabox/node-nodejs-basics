import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { argv } from 'node:process';
const { createHmac } = await import('node:crypto');

export const calculateHash = async () => {
  const file = join(dirname(argv[1]), 'files', 'fileToCalculateHashFor.txt');
  const secret = 'abcdefg';
  let hash;

  try {
    if (!existsSync(file)) {
      throw new Error('FS operation failed');
    }
    const data = await readFile(file, 'utf-8', (err) => {
      if (err) throw new Error('FS operation failed');
    });
    hash = createHmac('sha256', secret)
      .update(data)
      .digest('hex');
    console.log(hash);
  } catch (err) {
    console.log(err);
  }
};

calculateHash();