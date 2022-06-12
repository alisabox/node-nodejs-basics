import * as zlib from 'node:zlib';
import { join, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';

export const decompressCommand = async (command) => {
  try {
    const inputFile = command.split(' ')[1].trim();
    const fileName = parse(inputFile).name;
    const outputFile = join(command.split(' ')[2].trim(), fileName);
  
    const brotli = zlib.createBrotliDecompress();
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
      console.log('Decompressed file: ', outputFile);
    });
  } catch (err) {
    console.log('Cannot decompress file');
  }
};