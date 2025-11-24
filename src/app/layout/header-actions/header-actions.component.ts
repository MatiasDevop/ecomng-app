import { Component } from '@angular/core';
import {
  MatButton,
  MatButtonModule,
  MatIconButton,
} from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-actions',
  imports: [MatButtonModule, MatIconModule, MatIcon, RouterLink],
  templateUrl: './header-actions.component.html',
  styles: ``,
})
export class HeaderActionsComponent {}
