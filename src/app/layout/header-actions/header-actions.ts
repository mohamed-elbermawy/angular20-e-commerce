import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatButtonModule, MatIconModule],
  selector: 'app-header-actions',
  styleUrl: './header-actions.scss',
  templateUrl: './header-actions.html',
})
export class HeaderActions { }
