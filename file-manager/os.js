import { EOL, cpus, homedir, userInfo, arch } from 'os';

export const osCommand = async (command) => {
  const flag = command.split('--')[1].trim();

  if (flag === 'EOL') {
    console.log(JSON.stringify(EOL));
  } else if (flag === 'cpus') {
    const cpusInfo = [];
    cpus().map((cpu) => {
      cpusInfo.push({
        model: cpu.model,
        clockRate: cpu.model.split('@ ')[1],
      })
    });
    console.log('Number of cpus: ', cpus().length, '\n', cpusInfo);
  } else if (flag === 'homedir') {
    console.log(homedir());
  } else if (flag === 'username') {
    console.log(userInfo().username);
  } else if (flag === 'architecture') {
    console.log(arch());
  } else {
    console.log(`I don't know such command: ${command}`);
  }
};