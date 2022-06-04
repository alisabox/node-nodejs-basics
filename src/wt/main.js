import { Worker } from 'worker_threads';
import { dirname, join } from 'path';
import { argv, exit } from 'node:process';
import { cpus } from 'os';

export const performCalculations = async () => {
  const results = [];
  cpus().map((_cpu, index) => {
    const worker = new Worker(join(dirname(argv[1]), 'worker.js'));
    worker.postMessage(index + 10);
    worker.on('message', (data) => {
      results.push(data);
      if (results.length === cpus().length) {
        console.log(results);
        exit();
      }
    });
    worker.on('error', (error) => {
      console.log(error);
    });
  });
};

performCalculations();