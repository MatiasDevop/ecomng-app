import { inject, Injectable } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Toaster {
  toaster = inject(HotToastService);
  observable: Observable<string> = new Observable((observer) => {
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.complete();
  });
  success(message: string) {
    this.toaster.success(message);
  }

  error(message: string) {
    this.toaster.error(message);
  }
  testingObserve() {
    this.observable?.subscribe({
      next: (v) => console.log('observer got a next value: ' + v),
      error: (err) => console.error('observer got an error: ' + err),
      complete: () => console.log('observer got a complete notification'),
    });
  }
}
