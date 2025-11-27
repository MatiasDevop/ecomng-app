import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderActionsComponent } from '../header-actions/header-actions';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderActionsComponent],
  templateUrl: './header.html',
  styles: ``,
})
export class HeaderComponent {}
