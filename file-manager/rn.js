import { rename as renameFile } from 'fs/promises';
import { join } from 'path';

export const rnCommand = async (command, currentDir) => {
  try {
    const currentFile = command.split(' ')[1].trim();
    const newFile = join(currentDir, command.split(' ')[2].trim());
    await renameFile(currentFile, newFile);
    console.log('File is successfully renamed');
  } catch (_err) {
    console.log('Cannot rename the file');
  }
};