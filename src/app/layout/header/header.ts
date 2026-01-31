import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderActionsComponent } from '../header-actions/header-actions';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderActionsComponent, RouterLink],
  templateUrl: './header.html',
  styles: ``,
})
export class HeaderComponent {
  router = inject(Router);
  navigateToHome() {
    this.router.navigateByUrl('/products/All');
  }
}
