import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderActionsComponent } from '../header-actions/header-actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderActionsComponent],
  templateUrl: './header.html',
  styles: ``,
})
export class HeaderComponent {
  router = inject(Router);
  navigateToHome() {
    this.router.navigateByUrl('/products/All');
  }
}
