import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header';
import { Toaster } from './services/toaster';
import {
  catchError,
  concatMap,
  filter,
  from,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  title = signal<string>('ng-ecommerce');
  service = inject(Toaster);
  observable = new Observable((observer) => {
    observer.next({ message: 'first comment', time: new Date() });
    observer.next('Hello Again!');
    observer.complete();
  });
  observableWithError = new Observable((observer) => {
    observer.next({ message: 'first comment', time: new Date() });
    observer.error('This is a forced error!');
    observer.complete();
  });
  observableWithSwitchMap = new Observable((observer) => {
    observer.next({ message: 'first comment', time: new Date() });
    observer.next({ message: 'second comment', time: new Date() });
    observer.complete();
  });
  ngOnInit() {
    //this.service.testingObserve();
    //this.testPipes();
    //this.handleErrors();
    //this.handleSwitchMap();
    // this.handleMergeMap();
    this.handleConcatMap();
  }
  testPipes() {
    this.observable
      ?.pipe(
        map((x: { message: string; time: Date } | string) => (typeof x === 'object' ? x.message : x)),
        filter((x: unknown): x is string => typeof x === 'string'),
      )
      .subscribe({
        next: (v) => console.log('observer got a next value: ' + v),
        error: (err) => console.error('observer got an error: ' + err),
        complete: () => console.log('observer got a complete notification'),
      });
  }
  handleErrors() {
    this.observableWithError
      .pipe(
        catchError((err) => {
          console.error('Error caught in handleErrors: ', err);
          return [];
        }),
      )
      .subscribe();
  }
  handleSwitchMap() {
    this.observableWithSwitchMap
      .pipe(
        switchMap((data: { message: string; time: Date }) => {
          console.log('SwitchMap received: ', data);
          return new Observable((observer) => {
            observer.next('Data processed: ' + data.message);
            observer.complete();
          });
        }),
      )
      .subscribe({
        next: (v) => console.log('observer got a next value: ' + v),
        error: (err) => console.error('observer got an error: ' + err),
        complete: () => console.log('observer got a complete notification'),
      });
  }
  userIds$ = of([1, 2, 3]);
  handleMergeMap() {
    this.userIds$
      .pipe(
        mergeMap((ids) =>
          from(ids).pipe(
            mergeMap(
              (id) => of({ id: id, name: 'User ' + id }), //this could be an HTTP request
              // Simulate async operation
            ),
          ),
        ),
      )
      .subscribe({
        next: (users) => console.log('observer got a next value: ', users),
      });
  }

  handleConcatMap() {
    this.userIds$
      .pipe(
        concatMap(
          (id) => of({ id: id, name: 'User ' + id }), //this could be an HTTP request
        ),
      )
      .subscribe({
        next: (users) => console.log('observer got a next value: ', users),
      });
  }
}
