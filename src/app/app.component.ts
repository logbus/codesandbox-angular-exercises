import { Component } from '@angular/core';
import { Exercise } from './exercises/exercise';
import { ExercisePromise1 } from './exercises/exercise-promise-1';
import { ExerciseAsync1 } from './exercises/exercise-async-1';
import { ExerciseAsync2 } from './exercises/exercise-async-2';
import { ExerciseHttp1 } from './exercises/exercise-http-1';
import { ExerciseHttp1a } from './exercises/exercise-http-1a';
import { ExerciseHttp1b } from './exercises/exercise-http-1b';
import { ExerciseHttp2 } from './exercises/exercise-http-2';
import { ExerciseHttp3 } from './exercises/exercise-http-3';
import { ExerciseHttp4 } from './exercises/exercise-http-4';
import { ExerciseFalsyTruthy } from './exercises/exercise-falsy-truthy';
import { ExerciseHttp4a } from './exercises/exercise-http-4a';
import { ExerciseHttp4b } from './exercises/exercise-http-4b';
import { ExerciseResult } from './exercises/exercise-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly exercises: Array<Exercise> = [
    new ExerciseFalsyTruthy(),
    new ExercisePromise1(),
    new ExerciseAsync1(),
    new ExerciseAsync2(),
    new ExerciseHttp1(),
    new ExerciseHttp1a(),
    new ExerciseHttp1b(),
    new ExerciseHttp2(),
    new ExerciseHttp3(),
    new ExerciseHttp4(),
    new ExerciseHttp4a(),
    new ExerciseHttp4b(),
    new ExerciseResult()
  ];
  public currentExercise: Exercise;
}
