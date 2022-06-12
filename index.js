import { argv } from 'node:process';
import { join, parse, isAbsolute } from 'path';
import { access } from 'fs/promises';
import * as readline from 'node:readline';
import { homedir } from 'os';
import { lsCommand } from './file-manager/ls.js';
import { catCommand } from './file-manager/cat.js';
import { addCommand } from './file-manager/add.js';
import { rnCommand } from './file-manager/rn.js';
import { cpCommand } from './file-manager/cp.js';
import { mvCommand } from './file-manager/mv.js';
import { rmCommand } from './file-manager/rm.js';
import { osCommand } from './file-manager/os.js';
import { hashCommand } from './file-manager/hash.js';
import { compressCommand } from './file-manager/compress.js';
import { decompressCommand } from './file-manager/decompress.js';

const readlineProcess = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const username = argv.find(arg => arg.startsWith('--username=')).split('=')[1];
let directory = homedir();

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${directory}`);

readlineProcess.on('line', command => {
  if (command === 'up') {
    if (parse(directory).base) {
      directory = join(directory,'../');
    }
    console.log(`You are currently in ${directory}`);
  } else if (command.startsWith('cd')) {
    let newDirectory = command.split(' ')[1].trim();
    newDirectory = isAbsolute(newDirectory) ? newDirectory: join(directory, newDirectory);
    console.log(newDirectory);
    access(newDirectory).then(() => {
      directory = newDirectory;
      console.log(`You are currently in ${directory}`);
    }).catch(() => console.log('No such directory ', newDirectory));
  } else if (command === 'ls') {
    lsCommand(directory);
  } else if (command.startsWith('cat')) {
    catCommand(command);
  } else if (command.startsWith('add')) {
    addCommand(command, directory);
  } else if (command.startsWith('rn')) {
    rnCommand(command, directory);
  } else if (command.startsWith('cp')) {
    cpCommand(command);
  } else if (command.startsWith('mv')) {
    mvCommand(command);
  } else if (command.startsWith('rm')) {
    rmCommand(command);
  } else if (command.startsWith('os')) {
    osCommand(command);
  } else if (command.startsWith('hash')) {
    hashCommand(command);
  } else if (command.startsWith('compress')) {
    compressCommand(command);
  } else if (command.startsWith('decompress')) {
    decompressCommand(command);
  } else if (command === '.exit') {
    readlineProcess.emit('SIGINT');
  } else {
    console.log(`I don't know such command: ${command}`);
  }
});

readlineProcess.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${username}!`);
  readlineProcess.pause();
});
