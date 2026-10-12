import { Component } from '@angular/core';
import { HeaderActions } from '../header-actions/header-actions';

@Component({
  imports: [HeaderActions],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
