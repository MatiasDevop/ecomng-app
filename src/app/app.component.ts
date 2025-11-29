import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = signal<string>('ng-ecommerce');

  ngOnInit() {
    console.log('test palindromo', this.title());
    console.log(this.isPalindrome('anaana'));
  }

  isPalindrome(str: string): boolean {
    const size = str.length;
    const halfSize = Math.floor(size / 2);
    console.log('size', size, 'halfSize', halfSize);
    let leftIndex = 0;
    let strLength = size - 1;
    while (leftIndex < halfSize) {
      let leftValue = str.charAt(leftIndex);
      let rightValue = str.charAt(strLength - leftIndex);
      if (leftValue !== rightValue) return false;

      leftIndex++;
    }

    return true;
  }
}
