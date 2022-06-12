import { unlink } from 'fs/promises';

export const rmCommand = async (command) => {
  const pathToFile = command.split(' ')[1].trim();
  try {
    await unlink(pathToFile);
    console.log('File is successfully removed');
  } catch (err) {
    console.log('Cannot remove file');
  }
};