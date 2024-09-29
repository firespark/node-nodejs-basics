import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
    const folderPath = import.meta.dirname;
    const numCores = cpus().length;

    let workers = [];

    for (let i = 0; i < numCores; i++) {
        const workerData = 10 + i;

        workers.push(new Promise((resolve) => {

            const worker = new Worker(`${folderPath}/worker.js`, {
                workerData: workerData,
            });

            worker.on('message', (msg) => {
                resolve({ status: 'resolved', data: msg });
            });

            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            });

        }));
    }


    const resultsArray = await Promise.all(workers);

    console.log(resultsArray);
};

await performCalculations();
