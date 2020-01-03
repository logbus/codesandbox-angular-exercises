import { Exercise } from './exercise';
import { HttpSimulator } from './http-simulator';

export class ExerciseHttp2 extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Http-2';
    this.question = 'What is logged when you call the run() method?';
    this.info = `
This exercise uses an http simulator that simulates an http call.
Every httpGet() call return without error after 2000ms delay.
`;
    this.infoUrl = null;
    this.infoUrlName = null;
    this.code = `async public run() {
  const start = Date.now();
  this.doLog('httpGet(url-1) running...');
  await HttpSimulator.httpGet('url-1')
    .then(data => this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data));
  this.doLog('httpGet(url-2) running...');
  await HttpSimulator.httpGet('url-2')
    .then(data => this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data));
  this.doLog('httpGet(url-3) running...');
  await HttpSimulator.httpGet('url-3')
    .then(data => this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data));
}
`;
    this.solutionUrl = null;
    this.solution = `httpGet(url-1) running...
Elapsed: 2000ms - httGet(url-1): Ok
httpGet(url-2) running...
Elapsed: 4000ms - httGet(url-2): Ok
httpGet(url-3) running...
Elapsed: 6000ms - httGet(url-3): Ok
processing received data

All http calls are running after each other resulting in 6000ms processing time
in contrast to exercise Http-1 with only 2000ms processing time.
==> But now we are processing the data when it is available.
`;
  }

  public async run() {
    const start = Date.now();
    this.doLog('httpGet(url-1) running...');
    await HttpSimulator.httpGet('url-1').then(data => this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data));
    this.doLog('httpGet(url-2) running...');
    await HttpSimulator.httpGet('url-2').then(data => this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data));
    this.doLog('httpGet(url-3) running...');
    await HttpSimulator.httpGet('url-3').then(data => this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data));
    this.doLog('processing received data');
  }
}
