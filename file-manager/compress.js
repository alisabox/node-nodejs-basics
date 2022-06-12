import * as zlib from 'node:zlib';
import { createReadStream, createWriteStream } from 'fs';
import { join, parse } from 'path';

export const compressCommand = async (command) => {
  try {
    const inputFile = command.split(' ')[1].trim();
    const fileName = parse(inputFile).base;
    const outputFile = join(command.split(' ')[2].trim(), `${fileName}.br`);
  
    const brotli = zlib.createBrotliCompress();
    const readStream = createReadStream(inputFile);
    const writeStream = createWriteStream(outputFile);
  
    const stream = readStream.pipe(brotli).pipe(writeStream);
    readStream.on('error', () => {
      console.log('Cannot decompress file');
    });
    writeStream.on('error', () => {
      console.log('Cannot decompress file');
    });
    stream.on('finish', () => {
      console.log('Compressed file: ', outputFile);
    });
  } catch (err) {
    console.log('Cannot compress file');
  }
};