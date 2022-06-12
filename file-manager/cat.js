import { createReadStream } from 'fs';
import { stdout } from 'process';

export const catCommand = async (command) => {
  const pathToFile = command.slice(4).trim();
  const readableStream = createReadStream(pathToFile);
  readableStream.on('data', (chunk) => {
    stdout.write(chunk);
  });
  readableStream.on('end', () => console.log('\n'));
  readableStream.on('error', () => console.log('Cannot read the file', pathToFile));
}