import { env } from 'process';

export const parseEnv = () => {
    for (const key of Object.keys(env)) {
        console.log(`RSS_${key}=${env[key]}`)
    }
};

parseEnv();