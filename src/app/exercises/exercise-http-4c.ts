import { Exercise } from './exercise';
import { HttpSimulator } from './http-simulator';

export class ExerciseHttp4c extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Http-4-Error-best';
    this.question = 'What is logged when you call the run() method?';
    this.info = `This exercise uses an http simulator that simulates an http call togehter with results.
Every httpGetWithResult() call returns a Result(ok) object without error after 2000ms delay.
Every httpGetWithError() call returns a Result(error) object after 2000ms delay.

Please look at the Result Exercise first.
`;
    this.infoUrl = null;
    this.infoUrlName = null;
    this.code = `public async run() {
  const start = Date.now();
  this.doLog('httpGetWithResult(url-1) running...');
  const result1 = HttpSimulator.httpGetWithResult('url-1');
  this.doLog('httpGetWithErrorWithResult(url-2) running...');
  const result2 = HttpSimulator.httpGetWithErrorWithResult('url-2');
  this.doLog('httpGetWithResult(url-3) running...');
  const result3 = HttpSimulator.httpGetWithResult('url-3');
  const results = await Promise.all([result1, result2, result3]);
  this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + results[0].get(error => error.message));
  this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + results[1].get(error => error.message));
  this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + results[2].get(error => error.message));
  this.doLog('processing received data');
}
`;
    this.solutionUrl = null;
    this.solution = `httpGetWithResult(url-1) running...
httpGetWithErrorWithResult(url-2) running...
httpGetWithResult(url-3) running...
Elapsed: 2000ms - httGet(url-1): Ok
Elapsed: 2000ms - httGet(url-2): Error 500
Elapsed: 2000ms - httGet(url-3): Ok
processing received data

==> All calls are done in paralell, we await all of them which is done after 2000ms.
We can evaluate the result of each call and can process the data as needed.
We know that each call possibly can result in an error, to which we can react. 
`;
  }

  public async run() {
    const start = Date.now();
    this.doLog('httpGetWithResult(url-1) running...');
    const result1 = HttpSimulator.httpGetWithResult('url-1');
    this.doLog('httpGetWithErrorWithResult(url-2) running...');
    const result2 = HttpSimulator.httpGetWithErrorWithResult('url-2');
    this.doLog('httpGetWithResult(url-3) running...');
    const result3 = HttpSimulator.httpGetWithResult('url-3');
    const results = await Promise.all([result1, result2, result3]);
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + results[0].get(error => error.message));
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + results[1].get(error => error.message));
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + results[2].get(error => error.message));
    this.doLog('processing received data');
  }
}
