import { writeFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export const addCommand = async (command, currentDir) => {
  const fileName = command.split(' ')[1].trim();
  const pathToFile = join(currentDir, fileName);

  try {
    if (existsSync(pathToFile)) {
      console.log('Such file already exists');
    } else {
      await writeFile(pathToFile, '');
      console.log('File is successfully created');
    }
  } catch (err) {
    console.log('Cannot not create file', pathToFile);
  }
}