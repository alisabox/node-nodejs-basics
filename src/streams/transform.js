import { stdin, stdout, exit } from 'process';
import { Transform } from 'stream';

export const transform = async () => {
  const transformStream = new Transform();
  transformStream._transform = (chunk) => {
    transformStream.push(chunk.toString());
    exit();
  };
  stdin.pipe(transformStream).pipe(stdout);
};

transform();