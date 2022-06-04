import { fork } from 'child_process';
import { dirname, join } from 'path';
import { argv } from 'node:process';

export const spawnChildProcess = async (args) => {
  const file = join(dirname(argv[1]), 'files', 'script.js');
  fork(file, args);
}

spawnChildProcess(['1', '2', '3']);