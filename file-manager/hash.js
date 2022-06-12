import { readFile } from 'fs/promises';
const { createHmac } = await import('node:crypto');

export const hashCommand = async (command) => {
  const pathToFile = command.split(' ')[1].trim();
  const secret = 'abcdefg';
  let hash;

  try {
    const data = await readFile(pathToFile, 'utf-8');
    hash = createHmac('sha256', secret).update(data).digest('hex');
    console.log(hash);
  } catch (_err) {
    console.log('Such file doesn\'t exist');
  }
};