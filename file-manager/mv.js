import { mkdir, copyFile, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import { join, parse } from 'path';


export const mvCommand = async (command) => {
  try {
    const pathToFile = command.split(' ')[1].trim();
    const fileName = parse(pathToFile).base;
    const pathToNewDir = command.split(' ')[2].trim();
    
    if (!existsSync(pathToNewDir)) {
      await mkdir(pathToNewDir, { recursive: true });
    }
    await copyFile(pathToFile, join(pathToNewDir, fileName));
    await unlink(pathToFile);
    console.log('File is successfully moved');
  } catch (err) {
    console.log('Cannot move file', err);
  }
};