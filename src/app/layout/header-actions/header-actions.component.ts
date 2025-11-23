import { Component } from '@angular/core';
import {
  MatButton,
  MatButtonModule,
  MatIconButton,
} from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-actions',
  imports: [MatButtonModule, MatIconModule, MatIcon],
  templateUrl: './header-actions.component.html',
  styles: ``,
})
export class HeaderActionsComponent {}
