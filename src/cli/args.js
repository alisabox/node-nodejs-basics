import { argv } from 'node:process';

export const parseArgs = () => {
    let i = 2;
    const result = [];
    while (i < argv.length) {
        result.push(`${argv[i].replaceAll('-', '')} is ${argv[i+1]}`);
        i = i + 2;
    }
    console.log(result.join(', '));
};

parseArgs();