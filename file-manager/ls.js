import { readdir } from 'fs/promises';

export const lsCommand = async(filesDir) => {
    const files =  await readdir(filesDir);
    files.map(async (file) => console.log('- ', file), (err) => {
      if (err) console.log('Something went wrong');
    });
}