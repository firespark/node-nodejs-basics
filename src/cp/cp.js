import { spawn } from 'child_process';

//const cliArgs = process.argv.slice(2);
const cliArgs = ['arg1', 'arg2'];

const spawnChildProcess = async (args) => {
    const folderPath = import.meta.dirname;
    const filePath = `${folderPath}/files/script.js`;

    const allArgs = [filePath, ...args];

    const childProcess = spawn('node', allArgs);

    process.stdin.on('data', (value) => {
       childProcess.stdin.write(value);
    });

    childProcess.stdout.on('data', (value) => {
        console.log(value.toString());
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(cliArgs);
